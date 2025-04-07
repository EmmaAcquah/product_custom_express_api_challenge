const express = require('express');
const router = express.Router();
const fruits = require('../controllers/productController');

router.get('/', productController.index);
router.get('/:name', productController.show);
router.post('/', productController.create);
router.patch('/:name', productController.update);
router.delete('/:name', productController.destroy);

module.exports = router;