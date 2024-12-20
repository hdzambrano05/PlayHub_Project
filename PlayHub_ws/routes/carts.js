var express = require('express');
var router = express.Router();
const cartsController = require('../controllers').cartsController;

router.get('/', cartsController.list);

module.exports = router;