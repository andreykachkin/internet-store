import {STRING, INTEGER, DECIMAL, BOOLEAN, DATE, literal} from 'sequelize'

export default db => {
    const schema = db.define('Shipment',
        {
            account_id: {
                type: INTEGER,
                allowNull: true,
            },
            shipper_id: {
                // shop
                type: INTEGER,
                allowNull: true,
            },
            carrier_id: {
                // transporter
                type: INTEGER,
                allowNull: true,
            },
            code: {
                type: STRING,
                allowNull: true,
            },
            from_address_id: {
                type: INTEGER,
                allowNull: true,
            },
            dest_address_id: { // destination address id
                type: INTEGER,
                allowNull: true,
            },
            status: {
                type: STRING,
                // TODO enum ('sent out', 'errors', 'delivered'),
                allowNull: true,
            },
            shipment_mode_id: {
                type: INTEGER,
                allowNull: true,
            },
            tracking_code: {
                type: STRING,
                allowNull: true,
            },
            // nickname
            name: {
                type: STRING,
                allowNull: true,
            },
            internal_ref: {
                type: STRING,
                allowNull: true,
            },
            weight: {
                type: DECIMAL(10, 3),
                allowNull: false,
                defaultValue: 0.0,
            },
            cost: {
                type: DECIMAL(10, 3),
                allowNull: false,
                defaultValue: 0.0,
            },
            cost_commercial: {
                type: DECIMAL(10, 3),
                allowNull: false,
                defaultValue: 0.0,
            },
            goods_value: {
                type: DECIMAL(10, 3),
                allowNull: false,
                defaultValue: 0.0,
            },
            date: {
                type: DATE,
                allowNull: true,
            },
            etd: { type: DATE },
            eta: { type: DATE },
            rtd: { type: DATE },
            rta: { type: DATE },
            shipper_is_read: {
                type: BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },

            quote_request_id: {
                type: INTEGER,
                allowNull: true,
            },
            sh_request_id: {
                type: INTEGER,
                allowNull: true,
            },

            created_at: {
                type: DATE,
                defaultValue: literal('CURRENT_TIMESTAMP'),
            },
            updated_at: {
                type: DATE,
                defaultValue: literal('CURRENT_TIMESTAMP'),
            },
        },
        {
            timestamps: true,
            paranoid: true,
            underscored: true,
            tableName: 'shipments',
        }
    );

    schema.Statuses = {
        NEW: 'new',
        IN_TRANSIT: 'in_transit',
        DELIVERED: 'delivered',
        PLANNED: 'planned',
    };

    schema.statuses_list = Object.keys(schema.Statuses)
        .map(function (key) {
            return schema.Statuses[key]
        });

    schema.statuses_matrix = {
    };

    return schema;
};
