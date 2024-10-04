import { FiMoreHorizontal } from "react-icons/fi";

import style from "./Profile.module.scss";
import { logout } from "../../redux/slices/auth";
import { useAppDispatch } from "../../redux/hooks";

export const Profile = () => {
  const dispatch = useAppDispatch();

  const onClickLogout = () => {
    if (window.confirm("Вы увернены что хотите выйти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  return (
    <div onClick={onClickLogout} className={style.wrap}>
      <img className={style.img} src="https://via.placeholder.com/40" alt="" />
      <div className={style.name}>@afonsointe</div>
      <div className={style.menu}>
        <FiMoreHorizontal />
      </div>
    </div>
  );
};
