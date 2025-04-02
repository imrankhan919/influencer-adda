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
router.put("/influencer/:id", updateInfluencer);
router.delete("/influencer/:id", removeInfluencer);
router.get("/bookings", getAllBookings);
router.put("/bookings/:id", updateBooking);

module.exports = router;
