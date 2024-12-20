var express = require('express');
var router = express.Router();
const categoriesController = require('../controllers').categoriesController;

router.get('/', categoriesController.list);

module.exports = router;
