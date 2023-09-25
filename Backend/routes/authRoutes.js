const express = require("express");
const passport = require("passport");
const authController = require("C:/Users/DCS/OneDrive/Desktop/NFT-main/backend/controllers/authControllers");

const router = express.Router();

router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;
