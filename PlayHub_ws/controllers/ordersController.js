const orders = require('../models').orders_model;
module.exports = {
    list(req, res) {
        return orders
            .findAll({})
            .then((orders) => res.status(200).send(orders))
            .catch((error) => { res.status(400).send(error); });
    },
}