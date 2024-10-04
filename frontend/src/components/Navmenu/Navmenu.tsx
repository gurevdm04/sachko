import { Navitem } from "../Navitem/Navitem";
import style from "./Navmenu.module.scss";
import { GoHomeFill } from "react-icons/go";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Path } from "../../constants/constants";
import { useAppSelector } from "../../redux/hooks";
import { selectIsAuth } from "../../redux/slices/auth";
import { Profile } from "../Profile/Profile";

export const Navmenu = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <ul className={style.menu}>
      <Navitem text="Home" path={Path.Home} Icon={GoHomeFill} />
      <Navitem
        text="Your posts"
        path={Path.YourPosts}
        Icon={BsFillFileEarmarkPostFill}
      />
      {!isAuth && (
        <Navitem text="Profile" path={Path.Profile} Icon={CgProfile} />
      )}

      {isAuth && <Profile />}
    </ul>
  );
};
