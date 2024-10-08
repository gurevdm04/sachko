// Внешние библиотеки
import { FaFireAlt } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import ContentLoader from "react-content-loader";

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

      <ProfileLoader />
    </ul>
  );
};

const ProfileLoader = () => {
  const isLoaded = useAppSelector((state) => state.auth.status);

  if (isLoaded === "loading") {
    return (
      <div className={style.loader}>
        <Loader />
      </div>
    );
  }

  return null;
};

const Loader = () => (
  <ContentLoader
    speed={2}
    width={225}
    height={75}
    viewBox="0 0 225 75"
    backgroundColor="#cbc8c8"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="50" ry="50" width="225" height="75" />
  </ContentLoader>
);
