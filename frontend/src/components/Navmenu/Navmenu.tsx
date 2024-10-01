import { Navitem } from "../Navitem/Navitem";
import style from "./Navmenu.module.scss";
import { GoHomeFill } from "react-icons/go";
import { FaFireAlt } from "react-icons/fa";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Path } from "../../constants/constants";

export const Navmenu = () => {
  return (
    <ul className={style.menu}>
      <Navitem text="Home" path={Path.Home} Icon={GoHomeFill} />
      <Navitem text="Popular" path={Path.Popular} Icon={FaFireAlt} />
      <Navitem
        text="Your posts"
        path={Path.YourPosts}
        Icon={BsFillFileEarmarkPostFill}
      />
      <Navitem text="Profile" path={Path.Profile} Icon={CgProfile} />
    </ul>
  );
};
