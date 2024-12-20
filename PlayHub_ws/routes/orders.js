var express = require('express');
var router = express.Router();

const ordersController = require('../controllers').ordersController;

router.get('/', ordersController.list);

module.exports = router;