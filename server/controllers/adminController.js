const asyncHandler = require("express-async-handler");
const Influencer = require("../models/influencerModel");
const Booking = require("../models/bookingModel");
const User = require("../models/userModel");
const Comment = require("../models/commentModel");

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
  const influencerExist = await Influencer.findOne({ instagram_handle });

  if (influencerExist) {
    res.status(400);
    throw new Error("Influencer Already Exists");
  }

  // Create Influencer
  const newInfluencer = await Influencer.create({
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

const updateInfluencer = asyncHandler(async (req, res) => {
  const updatedInfluencer = await Influencer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updatedInfluencer) {
    res.status(400);
    throw new Error("Influencer Not Updated!");
  }

  res.status(200).json(updatedInfluencer);
});

const removeInfluencer = asyncHandler(async (req, res) => {
  await Influencer.findByIdAndDelete(req.params.id);

  res.status(200).json({
    id: req.params.id,
    msg: "Influencer Removed!!",
  });
});

const getAllBookings = asyncHandler(async (req, res) => {
  const allBookings = await Booking.find().populate("user").populate('influencer')

  if (!allBookings) {
    res.status(400);
    throw new Error("No Bookings Found!!");
  }

  res.status(200).json(allBookings);
});

const updateBooking = asyncHandler(async (req, res) => {
  const updatedBooking = await Booking.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  ).populate('user').populate('influencer')

  if (req.body.status === "rejected") {
    // Update Influencer Status
    await Influencer.findByIdAndUpdate(updatedBooking.influencer._id, { isActive: true })
  }






  if (!updatedBooking) {
    res.status(400);
    throw new Error("Booking Not Updated");
  }

  res.status(200).json(updatedBooking);
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");

  if (!users) {
    res.status(404);
    throw new Error("Users Not Found!!");
  }

  res.status(200).json(users);
});

const getAllComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find().populate('user').populate('booking')

  if (!comments) {
    res.status(404);
    throw new Error("Comments Not Found!!");
  }

  res.status(200).json(comments);
});

module.exports = {
  createInfluencer,
  updateInfluencer,
  removeInfluencer,
  getAllBookings,
  updateBooking,
  getAllUsers,
  getAllComments,
};
