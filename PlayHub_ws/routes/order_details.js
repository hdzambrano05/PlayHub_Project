var express = require('express');
var router = express.Router();

const order_detailsController = require('../controllers').order_detailsController;

router.get('/', order_detailsController.list);

module.exports = router;