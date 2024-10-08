// Внешние библиотеки
import { FaFireAlt } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

// Локальные модули
import { Profile } from "../Profile/Profile";
import { Path } from "../../constants/constants";
import { useAppSelector } from "../../redux/hooks";
import { selectIsAuth } from "../../redux/slices/auth";
import { Navitem } from "../Navitem/Navitem";

// Стили
import style from "./Navmenu.module.scss";

export const Navmenu = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <ul className={style.menu}>
      <Navitem text="Домашняя" path={Path.Home} Icon={GoHomeFill} />
      <Navitem text="Популярное" path={Path.Popular} Icon={FaFireAlt} />
      <Navitem text="Посты с фото" path={Path.PhotoPosts} Icon={IoMdPhotos} />
      {isAuth && (
        <Navitem
          text="Создать пост"
          path={Path.YourPosts}
          Icon={BsFillFileEarmarkPostFill}
        />
      )}
      {!isAuth && (
        <Navitem text="Профиль" path={Path.Profile} Icon={CgProfile} />
      )}

      {isAuth && <Profile />}
    </ul>
  );
};
