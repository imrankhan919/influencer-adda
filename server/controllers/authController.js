const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  // Check if all fields are coming
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    res.status(400);
    throw new Error("Please Fill All Details!");
  }

  // Check if user already exists
  const emailExist = await User.findOne({ email: email });
  const phoneExist = await User.findOne({ phone: phone });

  if (emailExist || phoneExist) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  // Hash Password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  // Save User
  const user = await User.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      memberSince: user.createdAt,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User Cannot Registered");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please Fill All Details!");
  }

  // email exist
  const user = await User.findOne({ email: email });

  // check is email and password is correct
  if (user && bcrypt.compareSync(password, user.password)) {
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      memberSince: user.createdAt,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Credentials!");
  }
});

const privateController = async (req, res) => {
  res.json({
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    isAdmin: req.user.isAdmin,
  });
};

// Generate Token
const generateToken = (id) => {
  let token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  return token;
};

module.exports = { registerUser, loginUser, privateController };
