const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  // Check if all fields are filled
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    res.status(400);
    throw new Error("Please Fill All Details");
  }

  // Check is user already exists
  const emailExist = await User.findOne({ email: email });
  const phoneExist = await User.findOne({ phone: phone });

  if (emailExist || phoneExist) {
    res.status(400);
    throw new Error("User Already Exist");
  }

  // Hash Password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const user = await User.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });

  if (!user) {
    res.status(400);
    throw new Error("User Cannot Be Created!");
  } else {
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.email,
      isAdmin: user.isAdmin,
    });
  }
});

const loginUser = async (req, res) => {
  res.send("User Login");
};

module.exports = { registerUser, loginUser };
