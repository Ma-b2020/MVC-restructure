const express = require("express");
const userController = require("C:/Users/DCS/OneDrive/Desktop/NFT-main/backend/controllers/userControllers");

const router = express.Router();

router.get("/profile", userController.getUserProfile);

module.exports = router;
