const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    userId: {type: String, unique: true, required: true },
    password: String,
    phone: String,
    createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);