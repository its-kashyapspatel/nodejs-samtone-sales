const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController');

router.post('/create', ProductController.createProduct);

router.get('/all', ProductController.getAll);

module.exports = router;