const express = require("express");
const {
  getBookings,
  getBooking,
  addBooking,
} = require("../controllers/bookingContoller");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, getBookings);
router.post("/:id", protect, addBooking);
router.get("/:bid", protect, getBooking);

router.use("/:id/comment", require("./commentRoutes"));

module.exports = router;
