const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

router.post("/create", UserController.createUser);

router.post("/login", UserController.loginUser);

router.get("/:id", UserController.getUser);

module.exports = router;
