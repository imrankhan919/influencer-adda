const createInfluencer = async (req, res) => {
  res.send("Influencer Added");
};

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
