// Внешние библиотеки
import ContentLoader from "react-content-loader";
import { FaEye } from "react-icons/fa";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

// Локальные модули
import axios from "./../../axios";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentsList from "../../components/CommentsList/CommentsList";
import { selectIsAuth } from "../../redux/slices/auth";
import { useAppSelector } from "../../redux/hooks";

// Стили
import style from "./FullPostPage.module.scss";

export const FullPostPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const isAuth = useAppSelector(selectIsAuth);

  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={style.wrap}>
      <div className={style.goback}>
        <IoArrowBackCircleSharp onClick={goBack} />
      </div>
      <h2 className={style.title}>{data.title}</h2>
      {data.imageUrl && (
        <img
          style={{ width: "100%" }}
          src={`http://localhost:4444${data.imageUrl}`}
        />
      )}
      <ReactMarkdown children={data.text} />
      <div className={style.wrapIcon}>
        <FaEye className={style.icon} /> <span>{data.viewsCount}</span>
      </div>
      <CommentsList postId={id} />
      {isAuth && <CommentForm postId={id} />}
    </div>
  );
};

const Loader = () => (
  <ContentLoader
    speed={2}
    width={"100%"}
    height={400}
    viewBox="0 0 590 400"
    backgroundColor="#cbc8c8"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="192" height="50" />
    <rect x="0" y="62" rx="10" ry="10" width="590" height="117" />
    <rect x="-1" y="195" rx="10" ry="10" width="590" height="203" />
    <rect x="540" y="0" rx="10" ry="10" width="50" height="50" />
  </ContentLoader>
);
