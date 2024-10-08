// Внешние библиотеки

// Локальные модули
import { ProfileData } from "../../components/ProfileData/ProfileData";
import { Auth } from "../../components/Auth/Auth";
import { useAppSelector } from "../../redux/hooks";
import { selectIsAuth } from "../../redux/slices/auth";

// Стили

export const ProfilePage = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <>
      {isAuth ? (
        <>
          <ProfileData />
        </>
      ) : (
        <>
          <Auth />
        </>
      )}
    </>
  );
};
