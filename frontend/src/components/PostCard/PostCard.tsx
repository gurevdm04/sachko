import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

import style from "./PostCard.module.scss";

export const PostCard = () => {
  return (
    <>
      <div className={style.wrap}>
        <div>
          <img
            className={style.imgProfile}
            src="https://via.placeholder.com/40"
            alt=""
          />
        </div>
        <div>
          <div className={style.title}>
            @johndue - <span>00:26/22.09.2024</span>
          </div>
          <p className={style.text}>Tom is in a big hurry.</p>
          <img
            className={style.img}
            src="https://via.placeholder.com/500x300"
            alt=""
          />
          <div className={style.statistic}>
            <div>
              <FaHeart className={style.icon} /> <span>7083</span>
            </div>
            <div>
              <FaComment className={style.icon} /> <span>7083</span>
            </div>
          </div>
        </div>
      </div>
      <hr className={style.hr} />
    </>
  );
};
