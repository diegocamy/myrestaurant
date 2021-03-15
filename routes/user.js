const express = require("express");
const route = express.Router();
const userController = require("../controllers/user");
const { auth } = require("../middleware/auth");

route.post("/signup", userController.signup);
route.post("/login", userController.loginWithEmail);
route.post("/googlelogin", userController.loginWithGoogle);
route.get("/logout", userController.logout);
route.get("/users", auth, userController.users);
route.get("/me", auth, (req, res) => {
  res.send(req.user);
});

module.exports = route;
