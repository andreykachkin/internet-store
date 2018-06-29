import {STRING} from 'sequelize';

export default db => {
    return db.define('DictionaryShipmentMode',
        {
            name: {
                type: STRING,
                allowNull: false,
                defaultValue: '',
            },
            icon: {
                type: STRING,
                allowNull: true,
                defaultValue: null,
            },
        },
        {
            timestamps: true,
            underscored: true,
            paranoid: true,
            tableName: 'dict_sh_modes',
        }
    );
};
