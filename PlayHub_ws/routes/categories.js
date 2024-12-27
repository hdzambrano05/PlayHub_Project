var express = require('express');
var router = express.Router();
const categoriesController = require('../controllers').categoriesController;

router.get('/', categoriesController.list);
router.get('/:id', categoriesController.getById);
router.post('/', categoriesController.add);
router.put('/:id', categoriesController.update);
router.delete('/:id', categoriesController.delete);

module.exports = router;
