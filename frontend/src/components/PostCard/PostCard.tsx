import style from "./PostCard.module.scss";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useAppDispatch } from "../../redux/hooks";
import { fetchRemovePost } from "../../redux/slices/posts";
import { formatDate } from "../../utils";
import { FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa";

type PostCard = {
  id: string;
  title: string;
  text: string;
  updatedAt: string;
  user: any;
  isEditable: boolean;
  imageUrl: string;
  viewsCount: number;
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
}) => {
  const dispatch = useAppDispatch();

  const onClickRemove = () => {
    if (window.confirm("Вы увернены что хотите удалить статью?")) {
      dispatch(fetchRemovePost(id));
    }
  };

  return (
    <>
      <Link to={`/post/${id}`} className={style.wrap}>
        <div>
          <img className={style.imgProfile} src={user.avatarUrl} alt="" />
        </div>
        <div className={style.header}>
          <div className={style.title}>
            {user.fullName} - <span>{formatDate(updatedAt)}</span>
          </div>
          {isEditable && (
            <div className={style.controlPost}>
              <Link className={style.deleteLink} to={`/post/${id}/edit`}>
                <FaPen className={style.edit} />
              </Link>
              <MdDeleteForever
                onClick={onClickRemove}
                className={style.delete}
              />
            </div>
          )}
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
            </div>
          </div>
        </div>
      </Link>
      <hr className={style.hr} />
    </>
  );
};
