const carts = require('../models').carts_model;
module.exports = {
    list(req, res) {
        return carts
            .findAll({})
            .then((carts) => res.status(200).send(carts))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {

        console.log(req.params.id);
        return carts
            .findByPk(req.params.id)
            .then((carts) => {
                console.log(carts);
                if (!carts) {
                    return res.status(404).send({
                        message: 'carts Not Found',
                    });
                }
                return res.status(200).send(carts);
            })
            .catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        return carts
            .create({
                user_id: req.body.user_id,
                products_id: req.body.products_id,
                quantity: req.body.quantity,
                subtotal: req.body.subtotal,
                total: req.body.total
            })
            .then((carts) => res.status(201).send(carts))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return carts
            .findByPk(req.params.id)
            .then(carts => {
                if (!carts) {
                    return res.status(404).send({
                        message: 'carts Not Found',
                    });
                }
                return carts
                    .update({
                        user_id: req.body.user_id || carts.user_id,
                        products_id: req.body.products_id || carts.products_id,
                        quantity: req.body.quantity || carts.quantity,
                        subtotal: req.body.subtotal || carts.subtotal,
                        total: req.body.total || carts.total
                    })
                    .then(() => res.status(200).send(carts))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return carts
            .findByPk(req.params.id)
            .then(carts => {
                if (!carts) {
                    return res.status(400).send({
                        message: 'carts Not Found',
                    });
                }
                return carts
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    }, 

    
}