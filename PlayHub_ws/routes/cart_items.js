var express = require('express');
var router = express.Router();
const cart_itemsController = require('../controllers').cart_itemsController;

router.get('/', cart_itemsController.list);

module.exports = router;
