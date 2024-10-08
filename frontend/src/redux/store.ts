// Внешние библиотеки
import { configureStore } from "@reduxjs/toolkit";

// Локальные модули
import { postsReducer } from "./slices/posts";
import { authReducer } from "./slices/auth";
import { commentsReducer } from "./slices/comments";
import { openReducer } from "./slices/open";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    comments: commentsReducer,
    open: openReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
