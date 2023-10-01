const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');

router.post('/place', OrderController.placeOrder);

router.get('/client/:id', OrderController.findOrderByClient);

router.get('/user/:id', OrderController.findOrderByUser);

router.get('/all', OrderController.getAll);

module.exports = router;