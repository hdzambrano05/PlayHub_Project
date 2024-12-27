var express = require('express');
var router = express.Router();

const ordersController = require('../controllers').ordersController;

router.get('/', ordersController.list);
router.get('/:id', ordersController.getById);
router.post('/', ordersController.add);
router.put('/:id', ordersController.update);
router.delete('/:id', ordersController.delete);

module.exports = router;