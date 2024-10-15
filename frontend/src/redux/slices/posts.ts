// Внешние библиотеки
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Локальные модули
import axios from "./../../axios";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (category: string = "") => {
    const { data } = await axios.get(`/posts${category ? "/" + category : ""}`);
    return data;
  }
);

export const fetchRemovePost = createAsyncThunk(
  "posts/fetchRemovePost",
  async (id: any) => {
    const { data } = await axios.delete(`/posts/${id}`);
    return data;
  }
);

type StatusType = "loading" | "loaded" | "error";

interface PostsState {
  posts: {
    items: any[];
    status: StatusType;
  };

  tags: {
    items: any[];
    status: StatusType;
  };
}

const initialState: PostsState = {
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
