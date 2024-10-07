import { useLocation } from "react-router-dom";
import style from "./Header.module.scss";
import { Path } from "../../constants/constants";

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
  [Path.Home]: "Home",
  [Path.Popular]: "Popular",
  [Path.YourPosts]: "You Posts",
  [Path.Profile]: "Profile",
  [Path.FullPost]: "Full Post",
  [Path.EditPost]: "Edit Post",
  [Path.EditProfile]: "Edit Profile",
  [Path.PhotoPosts]: "Photo Posts",
};

export const Header = () => {
  let path: string | undefined = useLocation().pathname;

  return <div className={style.wrap}>{text[path as keyof typeof text]}</div>;
};
