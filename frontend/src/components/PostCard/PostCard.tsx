import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

import style from "./PostCard.module.scss";
import ContentLoader from "react-content-loader";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useAppDispatch } from "../../redux/hooks";
import { fetchRemovePost } from "../../redux/slices/posts";

type PostCard = {
  id: string;
  title: string;
  text: string;
  updatedAt: string;
  user: any;
  isEditable: boolean;
  imageUrl: string;
};

export const PostCard: React.FC<PostCard> = ({
  title,
  text,
  user,
  updatedAt,
  id,
  isEditable,
  imageUrl,
}) => {
  const dispatch = useAppDispatch();

  const onClickRemove = () => {
    if (window.confirm("Вы увернены что хотите удалить статью?")) {
      console.log(id);

      dispatch(fetchRemovePost(id));
    }
  };

  return (
    <>
      <div className={style.wrap}>
        <div>
          <img className={style.imgProfile} src={user.avatarUrl} alt="" />
        </div>
        <div>
          <div className={style.title}>
            {user.fullName} - <span>{updatedAt}</span>{" "}
            {isEditable && (
              <>
                - удалить статью{" "}
                <span>
                  <button onClick={onClickRemove}>+</button>
                </span>
                - редактировать статью <Link to={`/post/${id}/edit`}>тык</Link>
              </>
            )}
          </div>
          <Link to={`/post/${id}`}>id - {id}</Link>
          <p className={style.text}>{title}</p>
          <ReactMarkdown children={text} />
          <img
            className={style.img}
            src={`http://localhost:4444${imageUrl}`}
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
