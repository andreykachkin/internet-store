import db from '../db'

const { Shipment, Address } = db();

const list = (req, res) => {
    const query = {
        include: [
            {
                model: Address,
                as: 'address_dest',
            },
            {
                model: Address,
                as: 'address_from',
            },
        ],
        limit: 20,
    };
    Shipment
        .findAll(query)
        .then(shipments => {
            res.status(200).send(shipments)
        });
};

const view = (req, res) => {
    Shipment
        .find({ where: { id: req.params.id } })
        .then(shipment => {
            res.status(200).send(shipment)
        });
};

export { list, view };
