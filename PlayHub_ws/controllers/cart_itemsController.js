const cart_items = require('../models').cart_items_model;
module.exports = {
    list(req, res) {
        return cart_items
            .findAll({})
            .then((cart_items) => res.status(200).send(cart_items))
            .catch((error) => { res.status(400).send(error); });
    },
}