const order_details = require('../models').order_details_model;
module.exports = {
    list(req, res) {
        return order_details
            .findAll({})
            .then((order_details) => res.status(200).send(order_details))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {
        return order_details
            .findByPk(req.params.id)
            .then((order_details) => {
                if (!order_details) {
                    return res.status(404).send({
                        message: 'order_details Not Found',
                    });
                }
                return res.status(200).send(order_details);
            })
            .catch((error) =>
                res.status(400).send(error));
    },
    add(req, res) {
        return order_details
            .create({
                order_id: req.body.order_id,
                product_id: req.body.product_id,
                quantity: req.body.quantity,
                price: req.body.price,
                subtotal: req.body.subtotal,
                total: req.body.total
            })
            .then((order_details) => res.status(201).send(order_details))
            .catch((error) => res.status(400).send(error));
    },
    update(req, res) {
        return order_details
            .findByPk(req.params.id)
            .then(order_details => {
                if (!order_details) {
                    return res.status(404).send({
                        message: 'order_details Not Found',
                    });
                }
                return order_details
                    .update({
                        order_id: req.body.order_id || order_details.order_id,
                        product_id: req.body.product_id || order_details.product_id,
                        quantity: req.body.quantity || order_details.quantity,
                        price: req.body.price || order_details.price,
                        subtotal: req.body.subtotal || order_details.subtotal,
                        total: req.body.total || order_details.total
                    })
                    .then(() => res.status(200).send(order_details))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return order_details
            .findByPk(req.params.id)
            .then(order_details => {
                if (!order_details) {
                    return res.status(400).send({
                        message: 'order_details Not Found',
                    });
                }
                return order_details
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },      
}