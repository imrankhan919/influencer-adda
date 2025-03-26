const express = require("express");
const {
  getBookings,
  getBooking,
  addBooking,
} = require("../controllers/bookingContoller");

const router = express.Router();

router.get("/", getBookings);
router.post("/", addBooking);
router.get("/:id", getBooking);

router.use("/:id/comment", require("./commentRoutes"));

module.exports = router;
