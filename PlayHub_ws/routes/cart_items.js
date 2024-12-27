var express = require('express');
var router = express.Router();
const cart_itemsController = require('../controllers').cart_itemsController;

router.get('/', cart_itemsController.list);
router.get('/:id', cart_itemsController.getById);
router.post('/', cart_itemsController.add);
router.put('/:id', cart_itemsController.update);
router.delete('/:id', cart_itemsController.delete);

module.exports = router;
