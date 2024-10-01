import { FiMoreHorizontal } from "react-icons/fi";

import style from "./Profile.module.scss";

export const Profile = () => {
  return (
    <a href="#" className={style.wrap}>
      <img className={style.img} src="https://via.placeholder.com/40" alt="" />
      <div className={style.name}>@afonsointe</div>
      <div className={style.menu}>
        <FiMoreHorizontal />
      </div>
    </a>
  );
};
