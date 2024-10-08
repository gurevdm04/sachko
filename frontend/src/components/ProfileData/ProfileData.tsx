// Внешние библиотеки
import { Link } from "react-router-dom";
import { IoMdExit } from "react-icons/io";
import { GoPencil } from "react-icons/go";

// Локальные модули
import { Path } from "../../constants/constants";
import { logout } from "../../redux/slices/auth";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

// Стили
import style from "./ProfileData.module.scss";

export const ProfileData = () => {
  const dispatch = useAppDispatch();

  const { fullName, email, avatarUrl } = useAppSelector(
    (state) => state.auth.data
  );

  const onClickLogout = () => {
    if (window.confirm("Вы увернены что хотите выйти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  return (
    <div className={style.wrap}>
      <img className={style.img} src={avatarUrl} alt="" />
      <h2 className={style.title}>{fullName}</h2>
      <p className={style.text}>{email}</p>
      <div className={style.exit}>
        <Link to={Path.EditProfile} className={style.editBtn}>
          <GoPencil />
        </Link>
        <button className={style.exitBtn}>
          <IoMdExit onClick={onClickLogout} />
        </button>
      </div>
    </div>
  );
};
