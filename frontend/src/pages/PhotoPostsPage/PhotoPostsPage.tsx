// Внешние библиотеки
import { useEffect } from "react";

// Локальные модули
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPhotoPosts } from "../../redux/slices/posts";
import { PostList } from "../../components/PostList/PostList";

// Стили

export const PhotoPostsPage = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.data);
  const { postsPhoto } = useAppSelector((state) => state.posts);

  const isPostLoading = postsPhoto.status === "loading";

  useEffect(() => {
    dispatch(fetchPhotoPosts());
  }, []);

  return (
    <>
      <PostList
        isPostLoading={isPostLoading}
        posts={postsPhoto}
        userData={userData}
      />
    </>
  );
};
