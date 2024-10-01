import style from "./ProfileData.module.scss";
import { IoMdExit } from "react-icons/io";
import { GoPencil } from "react-icons/go";

export const ProfileData = () => {
  return (
    <div className={style.wrap}>
      <img className={style.img} src="https://via.placeholder.com/135" alt="" />
      <h2 className={style.title}>@Name</h2>
      <p className={style.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the.
      </p>
      <div className={style.exit}>
        <GoPencil />
        <IoMdExit />
      </div>
    </div>
  );
};
