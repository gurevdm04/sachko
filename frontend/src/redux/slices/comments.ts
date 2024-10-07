import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "./../../axios";

export const fetchComments = createAsyncThunk(
  "auth/fetchComments",
  async (postId: any) => {
    const { data } = await axios.get(`/comments/${postId}`);
    return data;
  }
);

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   try {
//     const response = await axios.post("/comments", {
//       postId,
//       text,
//     });
//     console.log("Комментарий добавлен:", response.data);
//   } catch (err) {
//     console.error("Ошибка при добавлении комментария:", err);
//   }
// };

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
  reducers: {
    addComment: (state, action) => {},
  },
  extraReducers(builder) {
    // fetchAuth
    builder.addCase(fetchComments.pending, (state) => {
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
