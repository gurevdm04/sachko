// Внешние библиотеки
import { useEffect } from "react";

// Локальные модули
import { PostList } from "../../components/PostList/PostList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPosts } from "../../redux/slices/posts";

// Стили

export const PopularPage = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.data);
  const { posts } = useAppSelector((state) => state.posts);

  const isPostLoading = posts.status === "loading";

  useEffect(() => {
    dispatch(fetchPosts("popular"));
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
