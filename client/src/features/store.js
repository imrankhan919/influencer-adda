import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice";
import admin from "./admin/adminSlice";
import influencer from "./influencers/influencerSlice";
import booking from "./bookings/bookingSlice";

const store = configureStore({
  reducer: { auth, admin, influencer, booking },
});

export default store;
