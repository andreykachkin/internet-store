import {STRING, BOOLEAN, INTEGER, DATE, literal} from 'sequelize';

export default db => {
    return db.define(
        'Address',
        {
            id: {
                type: INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            account_id: {
                type: INTEGER,
                allowNull: true
            },
            customer_id: {
                type: INTEGER,
                allowNull: true
            },
            shipper_id: {
                type: INTEGER,
                allowNull: true
            },
            // TODO - rebuild it
            shipper_division_id: {
                type: INTEGER,
                allowNull: true
            },
            carrier_id: {
                type: INTEGER,
                allowNull: true,
                defaultValue: null
            },
            // TODO - rebuild it
            carrier_division_id: {
                type: INTEGER,
                allowNull: true
            },
            name: {
                type: STRING,
                allowNull: true
            },
            is_location: {
                type: BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            country: {
                type: STRING,
                allowNull: true
            },
            city: {
                type: STRING,
                allowNull: true
            },
            address_1: {
                type: STRING,
                allowNull: true
            },
            address_2: {
                type: STRING,
                allowNull: true
            },
            address_3: {
                type: STRING,
                allowNull: true
            },
            zipcode: {
                type: STRING,
                allowNull: true
            },
            company_id: {
                type: STRING,
                allowNull: true
            },
            created_at: {
                type: DATE,
                defaultValue: literal('CURRENT_TIMESTAMP')
            },
            updated_at: {
                type: DATE,
                defaultValue: literal('CURRENT_TIMESTAMP')
            },
            url: {
                type: STRING,
                allowNull: true
            },
            lat: {
                type: STRING,
                allowNull: true
            },
            lng: {
                type: STRING,
                allowNull: true
            },
            place_id: {
                type: STRING,
                allowNull: true
            },
            state: {
                type: STRING,
                allowNull: true
            },
            phone_number: {
                type: STRING,
                allowNull: true
            },
        },
        {
            classMethods: {
            },
            timestamps: true,
            paranoid: true,
            underscored: true,
            tableName: 'addresses'
        }
    );
};
