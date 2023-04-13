import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../helper/axios";
import { requests } from "../../helper/requests";
const initialState = {
  headerVideo: {
    status: "idle",
    error: null,
    data: null,
  },
  videoDetails: {
    status: "idle",
    error: null,
    data: null,
  }
};

export const fetchHeaderVideo = createAsyncThunk(
  "common/fetchHeaderVideo",
  async (req) => {
    const response = await axios.get(requests.getDetails(req));
    return response.data;
  }
);

export const fetchVideoDetails = createAsyncThunk(
  "common/fetchVideoDetails",
  async (req) => {
    const response = await axios.get(requests.getDetails(req));
    return response.data;
  }
);


export const commonSlice = createSlice({
  name: "common",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeaderVideo.pending, (state) => {
        state.headerVideo.status = "loading";
      })
      .addCase(fetchHeaderVideo.fulfilled, (state, action) => {
        state.headerVideo.status = "success";
        state.headerVideo.data = action.payload;
      })
      .addCase(fetchHeaderVideo.rejected, (state, action) => {
        state.headerVideo.status = "failed";
        state.headerVideo.error = action.error.message;
      })
      .addCase(fetchVideoDetails.pending, (state) => {
        state.videoDetails.status = "loading";
      })
      .addCase(fetchVideoDetails.fulfilled, (state, action) => {
        state.videoDetails.status = "success";
        state.videoDetails.data = action.payload;
      })
      .addCase(fetchVideoDetails.rejected, (state, action) => {
        state.videoDetails.status = "failed";
        state.videoDetails.error = action.error.message;
      })
  },
});

export const selectHeaderVideo = (state) => state.common.headerVideo;
export const selectVideoDetails = (state) => state.common.videoDetails;

export default commonSlice.reducer;
