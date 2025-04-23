import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import admin from "./admin/adminSlice";
import influencer from "./influencers/influencerSlice";
import booking from "./bookings/bookingSlice";
import comment from "./comment/commentSlice"

const store = configureStore({
  reducer: { auth, admin, influencer, booking, comment },
});

export default store;
