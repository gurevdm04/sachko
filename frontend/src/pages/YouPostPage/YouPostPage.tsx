import React from "react";
import { PostList } from "../../components/PostList/PostList";
import { WritePost } from "../../components/WritePost/WritePost";

export const YouPostPage = () => {
  return (
    <>
      <WritePost />
      <PostList />
    </>
  );
};
