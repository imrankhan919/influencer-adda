const express = require("express");
const {
  createInfluencer,
  updateInfluencer,
  getAllBookings,
  removeInfluencer,
  updateBooking,
} = require("../controllers/adminController");

const router = express.Router();

router.post("/influencer", createInfluencer);
router.put("/influencer/:id", updateInfluencer);
router.delete("/influencer/:id", removeInfluencer);
router.get("/bookings", getAllBookings);
router.put("/bookings/:id", updateBooking);

module.exports = router;
