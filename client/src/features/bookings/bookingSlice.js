import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookingService from "./bookingService";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    bookings: [],
    bookingsLoading: false,
    bookingSuccess: false,
    bookingError: false,
    bookingMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export default bookingSlice.reducer;
