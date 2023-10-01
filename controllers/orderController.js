const Order = require('../models/Order');
const uuid = require('uuid');

exports.placeOrder = async (req, res) => {
    const { userId, clientId, product, qty } = req.body;
    const orderId = uuid.v4();
    try {
        const newOrder = new Order({ userId, clientId, orderId, product, qty });
        await newOrder.save();
        res.status(201).send('Order Placed Successfully!').json({orderId: orderId});
    } catch(err) {
        res.send(err);
    }
}

exports.findOrderByClient = async (req, res) => {
    const clientId = req.params.id;
    try {
        const orders = await Order.find({ clientId: clientId });
        res.send(orders);
    } catch(err) {
        res.send(err);
    }
}

exports.findOrderByUser = async (req, res) => {
    const userId = req.params.id;

    try {
        const orders = await Order.find({ userId });
        res.send(orders);
    } catch(err) {
        res.send(err);
    }
}

exports.getAll = async (req, res) => {
    try {
        const orders = Order.find();
        res.send(orders);
    } catch(err) {
        res.send(err);
    }
}