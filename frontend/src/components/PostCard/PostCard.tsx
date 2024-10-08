// Внешние библиотеки
import { FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { FaComments } from "react-icons/fa";

// Локальные модули
import { useAppDispatch } from "../../redux/hooks";
import { fetchRemovePost } from "../../redux/slices/posts";
import { formatDate } from "../../utils";

// Стили
import style from "./PostCard.module.scss";

type PostCard = {
  id: string;
  title: string;
  text: string;
  updatedAt: string;
  user: any;
  isEditable: boolean;
  imageUrl: string;
  viewsCount: number;
  countComment: number;
};

export const PostCard: React.FC<PostCard> = ({
  title,
  text,
  user,
  updatedAt,
  id,
  isEditable,
  imageUrl,
  viewsCount,
  countComment,
}) => {
  const dispatch = useAppDispatch();

  const onClickRemove = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();
    if (window.confirm("Вы увернены что хотите удалить статью?")) {
      dispatch(fetchRemovePost(id));
    }
  };

  return (
    <>
      <div style={{ position: "relative" }}>
        {isEditable && (
          <div className={style.controlPost}>
            <Link className={style.deleteLink} to={`/post/${id}/edit`}>
              <FaPen className={style.edit} />
            </Link>
            <MdDeleteForever onClick={onClickRemove} className={style.delete} />
          </div>
        )}
        <Link to={`/post/${id}`} className={style.wrap}>
          <div>
            <img className={style.imgProfile} src={user.avatarUrl} alt="" />
          </div>
          <div className={style.header}>
            <div className={style.title}>
              {user.fullName} - <span>{formatDate(updatedAt)}</span>
            </div>

            <p className={style.text}>{title}</p>
            <ReactMarkdown children={text} />
            <img
              className={style.img}
              src={`http://localhost:4444${imageUrl}`}
              alt=""
            />
            <div className={style.statistic}>
              <div>
                <FaEye className={style.icon} /> <span>{viewsCount}</span>
                <FaComments className={style.icon} /> <span>{countComment}</span>
              </div>
            </div>
          </div>
        </Link>
        <hr className={style.hr} />
      </div>
    </>
  );
};
