import { NavLink } from "react-router-dom";
import style from "./Navitem.module.scss";
import { IconType } from "react-icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toogle } from "../../redux/slices/open";

type NavitemProps = {
  text: string;
  path: string;
  Icon: IconType;
};

export const Navitem: React.FC<NavitemProps> = ({ text, path, Icon }) => {
  const dispatch = useAppDispatch();

  return (
    <li className={style.item}>
      <NavLink
        onClick={() => dispatch(toogle())}
        to={path}
        className={({ isActive }) =>
          isActive ? style.active + " " + style.link : style.link
        }
      >
        <Icon className={style.icon} /> {text}
      </NavLink>
    </li>
  );
};
