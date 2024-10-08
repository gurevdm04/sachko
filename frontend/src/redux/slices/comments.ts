// Внешние библиотеки
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Локальные модули
import axios from "./../../axios";

export const fetchComments = createAsyncThunk(
  "auth/fetchComments",
  async (postId: any) => {
    const { data } = await axios.get(`/comments/${postId}`);
    return data;
  }
);

interface AuthStaet {
  data: any[];
  status: "loading" | "loaded" | "error";
}

const initialState: AuthStaet = {
  data: [],
  status: "loading",
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // fetchAuth
    builder.addCase(fetchComments.pending, (state) => {
      state.data = [];
      state.status = "loading";
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    });
    builder.addCase(fetchComments.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const commentsReducer = commentsSlice.reducer;
