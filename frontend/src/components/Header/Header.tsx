import { useLocation } from "react-router-dom";
import style from "./Header.module.scss";
import { Path } from "../../constants/constants";
import { getFirstWordFromPath } from "../../utils";

// export enum Path {
//   Home = "/",
//   Popular = "/popular",
//   YourPosts = "/youposts",
//   Profile = "/profile",
//   FullPost = "/post/:id",
//   EditPost = "/post/:id/edit",
//   EditProfile = "/profile/edit",
//   PhotoPosts = "/photo",
// }

const text = {
  [getFirstWordFromPath(Path.Home)]: "Домашняя",
  [getFirstWordFromPath(Path.Popular)]: "Популярное",
  [getFirstWordFromPath(Path.YourPosts)]: "Создать пост",
  [getFirstWordFromPath(Path.Profile)]: "Профиль",
  [getFirstWordFromPath(Path.PhotoPosts)]: "Посты с фото",
};

export const Header = () => {
  let path: string | undefined = getFirstWordFromPath(useLocation().pathname);

  return <div className={style.wrap}>{text[path]}</div>;
};
