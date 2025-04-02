const asyncHandler = require("express-async-handler");
const influencer = require("../models/influencerModel");

const createInfluencer = asyncHandler(async (req, res) => {
  // Check if all fields are filled
  const {
    name,
    niche,
    followers,
    instagram_handle,
    rate,
    location,
    profilePic,
    gender,
  } = req.body;

  if (
    !name ||
    !niche ||
    !followers ||
    !instagram_handle ||
    !rate ||
    !location ||
    !profilePic ||
    !gender
  ) {
    res.status(400);
    throw new Error("Please Fill All Details");
  }

  // Check if influencer exist
  const influencerExist = await influencer.findOne({ instagram_handle });

  if (influencerExist) {
    res.status(400);
    throw new Error("Influencer Already Exists");
  }

  // Create Influencer
  const newInfluencer = await influencer.create({
    name,
    niche,
    followers,
    instagram_handle,
    rate,
    location,
    profilePic,
    gender,
  });

  if (!newInfluencer) {
    res.status(400);
    throw new Error("Influncer Not Created");
  }

  res.status(201).json(newInfluencer);
});

const updateInfluencer = async (req, res) => {
  res.send("Influencer Updated");
};

const removeInfluencer = async (req, res) => {
  res.send("Influencer Removed");
};

const getAllBookings = async (req, res) => {
  res.send("All Users Bookings");
};

const updateBooking = async (req, res) => {
  res.send("User Booking Updated");
};

module.exports = {
  createInfluencer,
  updateInfluencer,
  removeInfluencer,
  getAllBookings,
  updateBooking,
};
