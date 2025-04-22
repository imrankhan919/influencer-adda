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
    builder
      .addCase(getUsersBookings.pending, (state, action) => {
        state.bookingsLoading = true
        state.bookingSuccess = false
        state.bookingError = false
      })
      .addCase(getUsersBookings.fulfilled, (state, action) => {
        state.bookingsLoading = false
        state.bookings = action.payload
        state.bookingSuccess = true
        state.bookingError = false
      })
      .addCase(getUsersBookings.rejected, (state, action) => {
        state.bookingsLoading = false
        state.bookingSuccess = false
        state.bookingError = true
        state.bookingMessage = action.payload
      })
  },
});

export default bookingSlice.reducer;



// Get all users booking
export const getUsersBookings = createAsyncThunk("BOOKING/FETCH", async (_, thunkAPI) => {

  let token = thunkAPI.getState().auth.user.token;

  try {
    return await bookingService.fetchUserBookings(token);
  } catch (error) {
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
  }


})


// Add Booking
export const addBooking = createAsyncThunk("ADD/BOOKING", async (id, thunkAPI) => {

  let token = thunkAPI.getState().auth.user.token;

  try {
    return await bookingService.requestBooking(id, token)
  } catch (error) {
    const message = error.response.data.message;
    return thunkAPI.rejectWithValue(message);
  }



})