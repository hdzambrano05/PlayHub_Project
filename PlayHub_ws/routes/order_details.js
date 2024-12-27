var express = require('express');
var router = express.Router();

const order_detailsController = require('../controllers').order_detailsController;

router.get('/', order_detailsController.list);
router.get('/:id', order_detailsController.getById);
router.post('/', order_detailsController.add);
router.put('/:id', order_detailsController.update);
router.delete('/:id', order_detailsController.delete);

module.exports = router;