const order_details = require('../models').order_details.model;
module.exports = {
    list(req, res) {
        return order_details
            .findAll({})
            .then((order_details) => res.status(200).send(order_details))
            .catch((error) => { res.status(400).send(error); });
    },
}