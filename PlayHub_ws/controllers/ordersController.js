const { update } = require('./productsController');

const orders = require('../models').orders_model;
module.exports = {
    list(req, res) {
        return orders
            .findAll({})
            .then((orders) => res.status(200).send(orders))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {

        console.log(req.params.id);
        return orders
            .findByPk(req.params.id)
            .then((orders) => {
                console.log(orders);
                if (!orders) {
                    return res.status(404).send({
                        message: 'orders Not Found',
                    });
                }
                return res.status(200).send(orders);
            })
            .catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        return orders
            .create({
                user_id: req.body.user_id,
                products_id: req.body.products_id,
                status: req.body.status,
                delivery_date: req.body.delivery_date,
                payment_method: req.body.payment_method,
                total: req.body.total,
                delivery_address: req.body.delivery_address,
                delivery_phone: req.body.delivery_phone,
                notes: req.body.notes
            })
            .then((orders) => res.status(201).send(orders))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return orders
            .findByPk(req.params.id)
            .then(orders => {
                if (!orders) {
                    return res.status(404).send({
                        message: 'orders Not Found',
                    });
                }
                return orders
                    .update({
                        user_id: req.body.user_id || orders.user_id,
                        products_id: req.body.products_id || orders.products_id,
                        status: req.body.status || orders.status,
                        delivery_date: req.body.delivery_date || orders.delivery_date,
                        payment_method: req.body.payment_method || orders.payment_method,
                        total: req.body.total || orders.total,
                        delivery_address: req.body.delivery_address || orders.delivery_address,
                        delivery_phone: req.body.delivery_phone || orders.delivery_phone,
                        notes: req.body.notes || orders.notes
                    })
                    .then(() => res.status(200).send(orders))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return orders
            .findByPk(req.params.id)
            .then(orders => {
                if (!orders) {
                    return res.status(400).send({
                        message: 'orders Not Found',
                    });
                }
                return orders
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
}