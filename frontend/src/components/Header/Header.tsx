import { useLocation } from "react-router-dom";
import style from "./Header.module.scss";
import { Path } from "../../constants/constants";

const text = {
  [Path.Home]: "Home",
  [Path.Popular]: "Popular",
  [Path.YourPosts]: "You Posts",
  [Path.Profile]: "Profile",
};

export const Header = () => {
  let path: string | undefined = useLocation().pathname;

  return <div className={style.wrap}>{text[path as keyof typeof text]}</div>;
};
