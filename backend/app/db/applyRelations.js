import buildRelations from './buildRelations';

export default db => {
    buildRelations(db,
        [
            // ['Driver.user_id', 'belongsTo', 'User.id'],
            // ['User.id', 'hasOne', 'Driver.user_id'],
            // ['Shipment.sh_request_id', 'belongsTo', 'ShipmentRequest.id'],
            // ['ShipmentRequest.id', 'hasMany', 'ShipmentRequestContent.sh_request_id'],
            // ['ShipmentRequestContent.type_id', 'belongsTo', 'DictionaryShipmentRequestContentType.id', {as: 'type'}],
            //
            ['Shipment.from_address_id', 'belongsTo', 'Address.id', {as: 'address_from'}],
            ['Shipment.dest_address_id', 'belongsTo', 'Address.id', {as: 'address_dest'}],
            // ['ShipmentRequestAddress.address_id', 'belongsTo', 'Address.id', {as: 'address'}],
        ]
    );
    return db;
}
