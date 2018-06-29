import db from '../db'

const { DictionaryShipmentRequestContentType, DictionaryShipmentMode } = db();

const listShipmentContentTypes = (req, res) => {
    const query = {
        attributes: [
            'id',
            'name',
            'length',
            'width',
            'height',
            'length_edit',
            'width_edit',
            'height_edit',
            'dimension_unit',
            'is_container',
        ],
        order: [
            ['name', 'ASC'],
        ],
    };
    return DictionaryShipmentRequestContentType
        .findAll(query)
        .then(result => res.send(result))
        .catch(err => {
            req.log.error(err, 'Error loading shipment content types');
            res.status(500).send('Cannot load shipment content types');
        });
};

const listShipmentModes = (req, res) => {
    const query = {
        attributes: [
            'id',
            'name',
            'icon',
        ],
        order: [
            ['id', 'ASC'],
        ],
    };
    return DictionaryShipmentMode
        .findAll(query)
        .then(result => res.send(result))
        .catch(err => {
            req.log.error(err, 'Error loading shipment modes');
            res.status(500).send('Cannot load shipment modes');
        });
};

export {
    listShipmentContentTypes,
    listShipmentModes,
};
