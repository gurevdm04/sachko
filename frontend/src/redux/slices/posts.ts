import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "./../../axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get("/posts");
  console.log(data);
  
  return data.reverse();;
});

export const fetchRemovePost = createAsyncThunk(
  "posts/fetchRemovePost",
  async (id: any) => {
    const { data } = await axios.delete(`/posts/${id}`);
    return data;
  }
);

const initialState = {
  posts: {
    items: [],
    status: "loading",
  },
  tags: {
    items: [],
    status: "loading",
  },
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // fetchPosts
    builder.addCase(fetchPosts.pending, (state) => {
      state.posts.items = [];
      state.posts.status = "loading";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      console.log("action", action);

      state.posts.items = action.payload;
      state.posts.status = "loaded";
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.posts.items = [];
      state.posts.status = "error";
    });
    // fetchRemovePost
    builder.addCase(fetchRemovePost.pending, (state, action) => {
      state.posts.items = state.posts.items.filter(
        (obj) => obj._id !== action.meta.arg
      );
    });
  },
});

export const postsReducer = postsSlice.reducer;
