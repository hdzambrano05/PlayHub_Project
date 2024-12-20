const carts = require('../models').carts_model;
module.exports = {
    list(req, res) {
        return carts
            .findAll({})
            .then((carts) => res.status(200).send(carts))
            .catch((error) => { res.status(400).send(error); });
    },
}