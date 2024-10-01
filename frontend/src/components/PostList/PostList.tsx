import style from "./PostList.module.scss";
import { PostCard } from "../PostCard/PostCard";

export const PostList = () => {
  return (
    <div className={style.wrap}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};
