import { Navmenu } from "../Navmenu/Navmenu";
import { Profile } from "../Profile/Profile";
import style from "./Sidebar.module.scss";

export const Sidebar = () => {
  return (
    <div className={style.wrap}>
      <Navmenu />
    </div>
  );
};
