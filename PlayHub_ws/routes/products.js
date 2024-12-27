var express = require('express');
var router = express.Router();

const productsController = require('../controllers').productsController;

router.get('/', productsController.list);
router.get('/:id', productsController.getById);
router.post('/', productsController.add);
router.put('/:id', productsController.update);
router.delete('/:id', productsController.delete);

module.exports = router;