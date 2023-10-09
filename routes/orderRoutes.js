const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');

router.post('/place', OrderController.placeOrder);

router.get('/client/:id', OrderController.findOrdersByClient);

router.get('/user/:id', OrderController.findOrdersByUser);

router.get('/all', OrderController.getAll);

router.get('/:id', OrderController.getOrderByOrderId);

module.exports = router;