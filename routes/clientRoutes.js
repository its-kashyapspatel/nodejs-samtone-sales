const express = require('express');
const router = express.Router();
const ClientController = require('../controllers/clientController');

router.post('/create', ClientController.createClient);

router.put('/update', ClientController.updateClient);

router.get('/:id', ClientController.searchClientByClientId);

router.get('/:name', ClientController.searchClientByClientId);

module.exports = router;