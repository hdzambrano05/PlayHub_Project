const categories = require('../models').categories_model;
module.exports = {
    list(req, res) {
        return categories
            .findAll({})
            .then((categories) => res.status(200).send(categories))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {

        console.log(req.params.id);
        return categories
            .findByPk(req.params.id)
            .then((categories) => {
                console.log(categories);
                if (!categories) {
                    return res.status(404).send({
                        message: 'categories Not Found',
                    });
                }
                return res.status(200).send(categories);
            })
            .catch((error) =>
                res.status(400).send(error));
    },

    add(req, res) {
        return categories
            .create({
                name: req.body.name,
                description: req.body.description,
                image_url: req.body.image_url
            })
            .then((categories) => res.status(201).send(categories))
            .catch((error) => res.status(400).send(error));
    },


    update(req, res) {
        return categories
            .findByPk(req.params.id)
            .then(categories => {
                if (!categories) {
                    return res.status(404).send({
                        message: 'categories Not Found',
                    });
                }
                return categories
                    .update({
                        name: req.body.name || categories.name,
                        description: req.body.description || categories.description,
                        image_url: req.body.image_url || categories.image_url
                    })
                    .then(() => res.status(200).send(categories))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return categories
            .findByPk(req.params.id)
            .then(categories => {
                if (!categories) {
                    return res.status(400).send({
                        message: 'categories Not Found',
                    });
                }
                return categories
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },      
}