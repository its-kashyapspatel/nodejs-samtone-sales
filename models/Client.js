const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    clientId: {type: String, unique: true, required: true },
    companyName: { type: String, required: true },
    companyAddress: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Client', clientSchema);