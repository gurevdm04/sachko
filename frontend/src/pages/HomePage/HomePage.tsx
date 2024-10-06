import { useEffect } from "react";
import { PostList } from "../../components/PostList/PostList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPosts } from "../../redux/slices/posts";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.data);
  const { posts } = useAppSelector((state) => state.posts);

  const isPostLoading = posts.status === "loading";

  useEffect(() => {
    dispatch(fetchPosts());
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
