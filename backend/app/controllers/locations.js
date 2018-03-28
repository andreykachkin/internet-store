import db from '../db'

const { Location } = db();

const list = (req, res) => {
    const query = {
        where: {
            is_location: true,
            shipper_id: 20,
            is_active: true,
            name: { $not: null },
        },
        limit: 20,
        order: [
            ['id', 'DESC'],
        ],
    };
    Location
        .findAll(query)
        .then(locations => res.status(200).send(locations));
};

const view = (req, res) => {
    Location
        .find({ where: { id: req.params.id, is_location: true, } })
        .then(location => res.status(200).send(location));
};

const create = (req, res) => {
    const data = { ...req.body, is_location: true, shipper_id: 20 };

    return Location
        .create(data)
        .then(() => res.status(200).send(''));
};

const update = (req, res) => {
    const input = req.body;

    const locationQuery = {
        where: {
            id: req.params.id,
        },
    };
    return Location.update(input, locationQuery)
        .then(() => res.status(200).send());
};

const remove = (req, res) => {
    Location
        .destroy({ where: { id: req.params.id } })
        .then(() => res.status(200).send());
};

export { list, view, create, update, remove };
