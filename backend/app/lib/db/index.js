import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

import applyRelations from './applyRelations';
import logger from '../log';
import config from '../../../config';

let db;

export default () => {
    if (db) {
        return db;
    }

    const sequelize = new Sequelize(
        config.database.urn,
        {
            dialect: 'postgres',
            logging: logger.db,
        }
    );

    const modelsDir = path.join(__dirname, '..', '..', 'models');

    db = fs.readdirSync(modelsDir)
        .filter(file => file.indexOf('.') !== 0)
        .reduce((accum, file) => {
            const model = sequelize.import(path.join(modelsDir, file));
            return {
                ...accum,
                [model.name]: model,
            };
        }, { sequelize });

    return applyRelations(db);
};
