const products = require('../models').project_model;
module.exports = {
    list(req, res) {
        return products
            .findAll({})
            .then((products) => res.status(200).send(products))
            .catch((error) => { res.status(400).send(error); });
    },
}