// Внешние библиотеки
import { useEffect } from "react";

// Локальные модули
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPosts } from "../../redux/slices/posts";
import { PostList } from "../../components/PostList/PostList";

// Стили

export const PhotoPostsPage = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.data);
  const { posts } = useAppSelector((state) => state.posts);

  const isPostLoading = posts.status === "loading";

  useEffect(() => {
    dispatch(fetchPosts("photo"));
  }, []);

  return (
    <>
      <PostList
        isPostLoading={isPostLoading}
        posts={posts}
        userData={userData}
      />
    </>
  );
};
