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
        limit: 40,
    };
    Location
        .findAll(query)
        .then(locations => {
            res.status(200).send(locations)
        });
};

const view = (req, res) => {
    Location
        .find({ where: { id: req.params.id, is_location: true, } })
        .then(location => {
            res.status(200).send(location)
        });
};

const remove = (req, res) => {
    Location
        .destroy({ where: { id: req.params.id } })
        .then(() => {
            res.status(200).send();
        });
};

export { list, view, remove };
