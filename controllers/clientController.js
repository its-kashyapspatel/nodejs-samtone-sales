const Client = require('../models/Client');
const uuid = require('uuid');

exports.createClient = async (req, res) => {
    const { name, email, phone, companyName, companyAddress, userId} = req.body;
    const clientId = uuid.v4();
    const accountCreatedBy = userId;
    try {
        const newClient = new Client({ name, email, phone, clientId, companyName, companyAddress, accountCreatedBy });
        await newClient.save();
        res.send('Client Registered Successfully!');
    } catch(error) {
        res.send(error);
    }
}

exports.updateClient = async (req, res) => {
    const clientId = req.params.id;
    try {
        const updatedFields = {};
        if(req.body.email) {
            updatedFields.email = req.body.email;
        }
        if(req.body.phone) {
            updatedFields.phone = req.body.phone;
        }
        const updatedClient = await Client.findOneAndUpdate({ clientId: clientId }, updatedFields, { runValidators: true });
        res.send('Client Updated!');
    } catch(err) {
        res.send(err);
    }
}

exports.searchClientByClientId = async (req, res) => {
    const clientId = req.params.id;
    try {
        const client = await Client.find({ clientId });
        res.send(client);
    } catch(err) {
        res.send(err);
    }
}

exports.searchClientByClientName = async (req, res) => {
    const clientName = req.params.name;
    try {
        const client = await Client.find({ name:clientName });
        res.send(client);
    } catch(err) {
        res.send(err);
    }
}