const express = require('express');
const router = express.Router();
const fruits = require('../controllers/productController');

router.get('/', productController.index);
router.get('/:id', productController.show);
router.post('/', productController.create);
router.patch('/:id', productController.update);
router.delete('/:id', productController.destroy);

module.exports = router;