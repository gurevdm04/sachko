import axios from "./../../axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentsList from "../../components/CommentsList/CommentsList";

import style from "./FullPostPage.module.scss";
import { FaEye } from "react-icons/fa";

export const FullPostPage = () => {
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
    return "Loadng...";
  }

  return (
    <>
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
      <CommentForm postId={id} />
    </>
  );
};
