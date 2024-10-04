import { NavLink } from "react-router-dom";
import style from "./Navitem.module.scss";
import { IconType } from "react-icons";

type NavitemProps = {
  text: string;
  path: string;
  Icon: IconType;
};

export const Navitem: React.FC<NavitemProps> = ({ text, path, Icon }) => {
  return (
    <li className={style.item}>
      <NavLink
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
