import { Navmenu } from "../Navmenu/Navmenu";
import style from "./Sidebar.module.scss";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toogle } from "../../redux/slices/open";

export const Sidebar = () => {
  const isOpen = useAppSelector((state) => state.open.value);
  const dispatch = useAppDispatch();

  return (
    <div className={`${style.wrap} ${isOpen && style.active}`}>
      <div onClick={() => dispatch(toogle())} className={style.hamb}>
        {isOpen ? <IoClose /> : <TiThMenu />}
      </div>
      <Navmenu />
    </div>
  );
};
