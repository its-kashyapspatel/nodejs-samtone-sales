const express = require("express");
const router = express.Router();
const ClientController = require("../controllers/clientController");

router.post("/create", ClientController.createClient);

router.put("/update", ClientController.updateClient);

router.get("/id/:id", ClientController.searchClientByClientId);

router.get("/name/:name", ClientController.searchClientByClientName);

module.exports = router;
