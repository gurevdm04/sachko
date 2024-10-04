import axios from "./../../axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

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
      <div>FullPostPage</div>
      <h2>title: {data.title}</h2>
      {data.imageUrl && (
        <img
          style={{ width: "100%" }}
          src={`http://localhost:4444${data.imageUrl}`}
        />
      )}
      <ReactMarkdown children={data.text} />
      <p>viewsCount: {data.viewsCount}</p>
    </>
  );
};
