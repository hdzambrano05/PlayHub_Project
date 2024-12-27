const products = require('../models').products_model;
module.exports = {

    list(req, res) {
        return products
            .findAll({})
            .then((products) => res.status(200).send(products))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {

        console.log(req.params.id);
        return products
            .findByPk(req.params.id)
            .then((products) => {
                console.log(products);
                if (!products) {
                    return res.status(404).send({
                        message: 'products Not Found',
                    });
                }
                return res.status(200).send(products);
            })
            .catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        return products
            .create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                stock: req.body.stock,
                image_url: req.body.image_url,
                category_id: req.body.category_id

            })
            .then((products) => res.status(201).send(products))
            .catch((error) => res.status(400).send(error));
    },


    update(req, res) {
        return products
            .findByPk(req.params.id)
            .then(products => {
                if (!products) {
                    return res.status(404).send({
                        message: 'products Not Found',
                    });
                }
                return products
                    .update({
                        name: req.body.name || products.name,
                        description: req.body.description || products.description,
                        price: req.body.price || products.price,
                        stock: req.body.stock || products.stock,
                        image_url: req.body.image_url || products.image_url,
                        category_id: req.body.category_id || products.category_id
                    })
                    .then(() => res.status(200).send(products))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return products
            .findByPk(req.params.id)
            .then(products => {
                if (!products) {
                    return res.status(400).send({
                        message: 'products Not Found',
                    });
                }
                return products
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },




}