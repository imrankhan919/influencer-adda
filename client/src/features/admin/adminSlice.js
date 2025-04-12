import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminService from "./adminService";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
    bookings: [],
    influencers: [],
    comments: [],
    edit: { influencer: {}, isEdit: false },
  },
  reducers: {
    edit: (state, action) => {
      return {
        ...state,
        edit: { influencer: action.payload, isEdit: true },
      };
    },
  },
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
      })
      .addCase(createInfluencer.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(createInfluencer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.influencers = [...state.influencers, action.payload];
        state.isError = false;
      })
      .addCase(createInfluencer.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateTheInfluencer.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(updateTheInfluencer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.influencers = state.influencers.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
        state.edit = { influencer: {}, isEdit: false };
        state.isError = false;
      })
      .addCase(updateTheInfluencer.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(removeInfluencer.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(removeInfluencer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.influencers = state.influencers.filter(
          (item) => item._id !== action.payload.id
        );
        state.isError = false;
      })
      .addCase(removeInfluencer.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { edit } = adminSlice.actions;
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

// Add Influencer
export const createInfluencer = createAsyncThunk(
  "ADD/INFLUENCER",
  async (formData, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;
    try {
      return await adminService.addInfluencer(formData, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update Influencer
export const updateTheInfluencer = createAsyncThunk(
  "UPDATE/INFLUENCER",
  async (formData, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;
    try {
      return await adminService.updateInfluencer(formData, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update Influencer
export const removeInfluencer = createAsyncThunk(
  "REMOVE/INFLUENCER",
  async (id, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token;
    try {
      return await adminService.deleteInfluencer(id, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
