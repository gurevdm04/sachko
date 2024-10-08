// Внешние библиотеки
import { useLocation } from "react-router-dom";

// Локальные модули
import { Path } from "../../constants/constants";
import { getFirstWordFromPath } from "../../utils";

// Стили
import style from "./Header.module.scss";

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
