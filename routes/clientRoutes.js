const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/clientController');

router.post('/create', ClientController.createClient);

router.put('/update', ClientController.updateClient);

module.exports = router;