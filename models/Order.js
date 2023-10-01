const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true},
    clientId:{ type: String, required: true},
    orderId: {type: String, unique: true, required: true },
    product: {type: [String], required: true},
    qty:{type: [Number], required: true},
    createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('order', orderSchema);