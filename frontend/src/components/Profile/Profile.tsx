import { FiMoreHorizontal } from "react-icons/fi";

import style from "./Profile.module.scss";
import { logout } from "../../redux/slices/auth";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Path } from "../../constants/constants";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { fullName, avatarUrl } = useAppSelector((state) => state.auth.data);

  return (
    <Link className={style.wrap} to={Path.Profile}>
      <img className={style.img} src={avatarUrl} alt="" />
      <div className={style.name}>{fullName}</div>
    </Link>
  );
};
