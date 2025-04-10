import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminService from "./adminService";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
    bookings: [],
    influencers: [],
    comments: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersBookingsForAdmin.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getAllUsersBookingsForAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.bookings = action.payload;
        state.isError = false;
      })
      .addCase(getAllUsersBookingsForAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllInfluencersForAdmin.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getAllInfluencersForAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.influencers = action.payload;
        state.isError = false;
      })
      .addCase(getAllInfluencersForAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllUsersForAdmin.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getAllUsersForAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
        state.isError = false;
      })
      .addCase(getAllUsersForAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllCommentsForAdmin.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getAllCommentsForAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.comments = action.payload;
        state.isError = false;
      })
      .addCase(getAllCommentsForAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default adminSlice.reducer;

// Get Bookings For Admin
export const getAllUsersBookingsForAdmin = createAsyncThunk(
  "FETCH/ALL_USERS_BOOKINGS_ADMIN",
  async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;

    try {
      return await adminService.fetchAllUsersBookingsForAdmin(token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get User For Admin
export const getAllUsersForAdmin = createAsyncThunk(
  "FETCH/ALL_USERS_ADMIN",
  async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;

    try {
      return await adminService.fetchAllUsersForAdmin(token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Comments For Admin
export const getAllCommentsForAdmin = createAsyncThunk(
  "FETCH/ALL_COMMENTS_ADMIN",
  async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;

    try {
      return await adminService.fetchAllCommentsForAdmin(token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get All Influencers For Admin
export const getAllInfluencersForAdmin = createAsyncThunk(
  "FETCH/ALL_INFLUENCERS_ADMIN",
  async (_, thunkAPI) => {
    try {
      return await adminService.fetchInfluencersForAdmin();
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
