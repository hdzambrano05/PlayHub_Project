const { add } = require('./productsController');

const cart_items = require('../models').cart_items_model;
module.exports = {
    list(req, res) {
        return cart_items
            .findAll({})
            .then((cart_items) => res.status(200).send(cart_items))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {

        console.log(req.params.id);
        return cart_items
            .findByPk(req.params.id)
            .then((cart_items) => {
                console.log(cart_items);
                if (!cart_items) {
                    return res.status(404).send({
                        message: 'cart_items Not Found',
                    });
                }
                return res.status(200).send(cart_items);
            })
            .catch((error) =>
                res.status(400).send(error));
    },
    add(req, res) {
        return cart_items
            .create({
                user_id: req.body.user_id,
                products_id: req.body.products_id,
                quantity: req.body.quantity,
                subtotal: req.body.subtotal,
                total: req.body.total
            })
            .then((cart_items) => res.status(201).send(cart_items))
            .catch((error) => res.status(400).send(error));
    },

    
    update(req, res) {
        return cart_items
            .findByPk(req.params.id)
            .then(cart_items => {
                if (!cart_items) {
                    return res.status(404).send({
                        message: 'cart_items Not Found',
                    });
                }
                return cart_items
                    .update({
                        user_id: req.body.user_id || cart_items.user_id,
                        products_id: req.body.products_id || cart_items.products_id,
                        quantity: req.body.quantity || cart_items.quantity,
                        subtotal: req.body.subtotal || cart_items.subtotal,
                        total: req.body.total || cart_items.total
                    })
                    .then(() => res.status(200).send(cart_items))
                    .catch((error) => res.status(400).send(error));
                
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return cart_items
            .findByPk(req.params.id)
            .then(cart_items => {
                if (!cart_items) {
                    return res.status(400).send({
                        message: 'cart_items Not Found',
                    });
                }
                return cart_items
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },      
    
}