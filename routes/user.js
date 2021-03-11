const express = require("express");
const route = express.Router();
const userController = require("../controllers/user");

route.post("/signup", userController.signup);
route.post("/login", userController.loginWithEmail);
route.post("/googlelogin", userController.loginWithGoogle);

module.exports = route;
