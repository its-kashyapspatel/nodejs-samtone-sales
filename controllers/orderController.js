const Order = require("../models/Order");
const uuid = require("uuid");

exports.placeOrder = async (req, res) => {
  const { userId, clientId, product, qty } = req.body;
  const orderId = uuid.v4();
  try {
    const newOrder = new Order({ userId, clientId, orderId, product, qty });
    await newOrder.save();
    res.send("Order Placed Successfully!");
  } catch (error) {
    res.send(error);
  }
};

exports.findOrdersByClient = async (req, res) => {
  const clientId = req.params.id;
  try {
    const orders = await Order.find({ clientId: clientId });
    res.send(orders);
  } catch (error) {
    res.send(error);
  }
};

exports.findOrdersByUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const orders = await Order.find({ userId });
    res.send(orders);
  } catch (error) {
    res.send(error);
  }
};

exports.getAll = async (req, res) => {
  try {
    const orders = await Order.find();
    res.send(orders);
  } catch (error) {
    res.send(error);
  }
};

exports.getOrderByOrderId = async (req, res) => {
  const orderId = req.params.id;
  try {
    const order = await Order.find({ orderId });
    res.send(order);
  } catch (error) {
    res.send(error);
  }
};
