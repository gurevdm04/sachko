// Внешние библиотеки
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Локальные модули
import axios from "./../../axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios.get("/posts");
  return data;
});

export const fetchPopularPosts = createAsyncThunk(
  "posts/fetchPopularPosts",
  async () => {
    const { data } = await axios.get("/posts/popular");
    return data;
  }
);

export const fetchPhotoPosts = createAsyncThunk(
  "posts/fetchPhotoPosts",
  async () => {
    const { data } = await axios.get("/posts/photo");
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
  postsPopular: {
    items: any[];
    status: StatusType;
  };
  postsPhoto: {
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
  postsPopular: {
    items: [],
    status: "loading",
  },
  postsPhoto: {
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
    // fetchPopularPosts
    builder.addCase(fetchPopularPosts.pending, (state) => {
      state.postsPopular.items = [];
      state.postsPopular.status = "loading";
    });
    builder.addCase(fetchPopularPosts.fulfilled, (state, action) => {
      state.postsPopular.items = action.payload;
      state.postsPopular.status = "loaded";
    });
    builder.addCase(fetchPopularPosts.rejected, (state) => {
      state.postsPopular.items = [];
      state.postsPopular.status = "error";
    });
    // fetchPhotoPosts
    builder.addCase(fetchPhotoPosts.pending, (state) => {
      state.postsPhoto.items = [];
      state.postsPhoto.status = "loading";
    });
    builder.addCase(fetchPhotoPosts.fulfilled, (state, action) => {
      state.postsPhoto.items = action.payload;
      state.postsPhoto.status = "loaded";
    });
    builder.addCase(fetchPhotoPosts.rejected, (state) => {
      state.postsPhoto.items = [];
      state.postsPhoto.status = "error";
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
