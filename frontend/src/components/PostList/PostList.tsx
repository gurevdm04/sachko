import style from "./PostList.module.scss";
import { PostCard } from "../PostCard/PostCard";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPosts } from "../../redux/slices/posts";
import ContentLoader from "react-content-loader";

export const PostList = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.auth.data);
  const { posts } = useAppSelector((state) => state.posts);

  const isPostLoading = posts.status === "loading";

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <div className={style.wrap}>
        {(isPostLoading ? [...Array(3)] : posts.items).map((obj, index) =>
          isPostLoading ? (
            <Loader key={index} />
          ) : (
            <PostCard
              key={obj._id}
              id={obj._id}
              title={obj.title}
              text={obj.text}
              updatedAt={obj.updatedAt}
              user={obj.user}
              isEditable={userData?._id === obj.user._id}
              imageUrl={obj.imageUrl}
              viewsCount={obj.viewsCount}
            />
          )
        )}
        {!isPostLoading && posts.items.length === 0 ? <>Постов нет :( </> : null}
      </div>
    </>
  );
};

const Loader = () => (
  <ContentLoader
    speed={2}
    width={550}
    height={400}
    viewBox="0 0 550 400"
    backgroundColor="#cbc8c8"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="20" ry="20" width="100%" height="400" />
  </ContentLoader>
);
