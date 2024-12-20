const categories = require('../models').categories_model;
module.exports = {
    list(req, res) {
        return categories
            .findAll({})
            .then((categories) => res.status(200).send(categories))
            .catch((error) => { res.status(400).send(error); });
    },
}