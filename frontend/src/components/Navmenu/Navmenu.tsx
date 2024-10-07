import { Navitem } from "../Navitem/Navitem";
import style from "./Navmenu.module.scss";
import { GoHomeFill } from "react-icons/go";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Path } from "../../constants/constants";
import { useAppSelector } from "../../redux/hooks";
import { selectIsAuth } from "../../redux/slices/auth";
import { Profile } from "../Profile/Profile";
import { FaFireAlt } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";

export const Navmenu: React.FC<any> = ({ toggle }) => {
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
