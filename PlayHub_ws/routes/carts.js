var express = require('express');
var router = express.Router();
const cartsController = require('../controllers').cartsController;

router.get('/', cartsController.list);
router.get('/:id', cartsController.getById);
router.post('/', cartsController.add);
router.put('/:id', cartsController.update);
router.delete('/:id', cartsController.delete);

module.exports = router;