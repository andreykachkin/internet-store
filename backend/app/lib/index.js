import util from 'util';

import config from '../../config';
import db from '../models';
import log from './log';
// import passport from './passport';

export default express => ({
    config,
    db,
    express,
    // passport,
    logger: log.logger,
    inspect(obj, title) {
        if (title) {
            console.log(title);
        }
        console.log(util.inspect(obj, { colors: true, depth: null }));
    },
    inspection(obj) {
        return util.inspect(obj, { colors: true, depth: null });
    },
});
