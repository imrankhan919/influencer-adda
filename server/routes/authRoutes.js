const express = require("express");
const {
  registerUser,
  loginUser,
  privateController,
} = require("../controllers/authController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/private", privateController);

module.exports = router;
