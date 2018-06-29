import {STRING, BOOLEAN, INTEGER, DATE, literal} from 'sequelize';

export default db => {
    return db.define('DictionaryShipmentRequestContentType',
        {
            name: {
                type: STRING,
                allowNull: false,
                defaultValue: '',
            },
            shortname: {
                type: STRING,
                allowNull: true,
                defaultValue: null,
            },
            length: {
                type: STRING,
                allowNull: true,
            },
            length_edit: {
                type: BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            width: {
                type: STRING,
                allowNull: true,
            },
            width_edit: {
                type: BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            height: {
                type: STRING,
                allowNull: true,
            },
            height_edit: {
                type: BOOLEAN,
                allowNull: true,
                defaultValue: false,
            },
            dimension_unit: {
                type: STRING,
                allowNull: true,
                defaultValue: 'cm',
            },
            is_container: {
                type: BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        },
        {
            timestamps: true,
            underscored: true,
            paranoid: true,
            tableName: 'dict_sh_request_content_types',
        }
    );
};
