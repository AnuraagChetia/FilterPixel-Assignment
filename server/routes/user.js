const express = require("express");

const router = express.Router();

const userController = require("../controller/user");

const authenticate = require("../middleware/auth");

router.get("/get-user", authenticate, userController.getUser);

router.post("/signup", userController.signup);
router.post("/login", userController.login);

router.post("/google-login", userController.login);

module.exports = router;
