import axios from "axios";

const fetchAllUsersBookingsForAdmin = async (token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("/api/admin/bookings", options);
  return response.data;
};

const fetchAllUsersForAdmin = async (token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get("/api/admin/users", options);
  return response.data;
};

const fetchAllCommentsForAdmin = async (token) => {
  const options = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get("/api/admin/comments", options);
  return response.data;
};

const fetchInfluencersForAdmin = async () => {
  const response = await axios.get("/api/influencers");
  return response.data;
};

const adminService = {
  fetchAllUsersBookingsForAdmin,
  fetchInfluencersForAdmin,
  fetchAllUsersForAdmin,
  fetchAllCommentsForAdmin,
};

export default adminService;
