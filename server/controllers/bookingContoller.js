const getBookings = async (req, res) => {
  res.send("All My Bookings Here");
};

const getBooking = async (req, res) => {
  res.send("My Single Booking Here");
};

const addBooking = async (req, res) => {
  res.send("Booking Added");
};

module.exports = { getBookings, getBooking, addBooking };
