const express = require("express");
const {
  createInfluencer,
  updateInfluencer,
  getAllBookings,
  removeInfluencer,
  updateBooking,
} = require("../controllers/adminController");
const adminProtect = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/influencer", adminProtect, createInfluencer);
router.put("/influencer/:id", adminProtect, updateInfluencer);
router.delete("/influencer/:id", adminProtect, removeInfluencer);
router.get("/bookings", adminProtect, getAllBookings);
router.put("/bookings/:id", adminProtect, updateBooking);

module.exports = router;
