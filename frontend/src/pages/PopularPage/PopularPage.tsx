import { useEffect } from "react";
import { PostList } from "../../components/PostList/PostList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPopularPosts, fetchPosts } from "../../redux/slices/posts";

export const PopularPage = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.data);
  const { postsPopular } = useAppSelector((state) => state.posts);

  const isPostLoading = postsPopular.status === "loading";

  useEffect(() => {
    dispatch(fetchPopularPosts());
  }, []);
  return (
    <>
      <PostList
        isPostLoading={isPostLoading}
        posts={postsPopular}
        userData={userData}
      />
    </>
  );
};
