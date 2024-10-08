// Внешние библиотеки
import { Link } from "react-router-dom";

// Локальные модули
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Path } from "../../constants/constants";
import { toogle } from "../../redux/slices/open";

// Стили
import style from "./Profile.module.scss";

export const Profile = () => {
  const { fullName, avatarUrl } = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();

  return (
    <Link
      onClick={() => dispatch(toogle())}
      className={style.wrap}
      to={Path.Profile}
    >
      <img className={style.img} src={avatarUrl} alt="" />
      <div className={style.name}>{fullName}</div>
    </Link>
  );
};
