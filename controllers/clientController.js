const Client = require('../models/Client');
const uuid = require('uuid');

exports.createClient = async (req, res) => {
    const { name, email, phone, companyName, companyAddress } = req.body;
    const clientId = uuid.v4();
    try {
        const newClient = new Client({ name, email, phone, clientId, companyName, companyAddress });
        await newClient.save();
        res.status(201).send('Client Registered Successfully!');
    } catch(err) {
        res.send(err);
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

        if(req.body.companyAddress) {
            updatedFields.companyAddress = req.body.companyAddress;
        }

        const updatedClient = await Client.findOneAndUpdate({ clientId: clientId }, updatedFields, { runValidators: true });

        res.send('Client Updated!');
    } catch(err) {
        res.send(err);
    }
}