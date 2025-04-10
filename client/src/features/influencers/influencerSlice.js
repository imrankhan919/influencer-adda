import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import influencerService from "./influencerService";

const inlfuencersSlice = createSlice({
  name: "influencer",
  initialState: {
    influencers: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInfluencers.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(getInfluencers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.influencers = action.payload;
        state.isError = false;
      })
      .addCase(getInfluencers.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default inlfuencersSlice.reducer;

// Get All Influencers
export const getInfluencers = createAsyncThunk(
  "FETCH/INFLUENCERS",
  async (_, thunkAPI) => {
    try {
      return await influencerService.fetchInfluencers();
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
