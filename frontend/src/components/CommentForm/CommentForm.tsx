import React, { useEffect, useState } from "react";
import axios from "./../../axios";
import style from "./CommentForm.module.scss";
import { fetchComments } from "../../redux/slices/comments";
import { useAppDispatch } from "../../redux/hooks";

const CommentForm = ({ postId }: { postId: any }) => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios
        .post("/comments", {
          postId,
          text,
        })
        .finally(() => {
          dispatch(fetchComments(postId));
        });
    } catch (err) {
      console.error("Ошибка при добавлении комментария:", err);
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h2 className={style.title}>Оставьте свой комментарий</h2>
      <input
        className={style.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Добавьте комментарий"
      />
      <button className={style.btn} type="submit">
        Отправить
      </button>
    </form>
  );
};

export default CommentForm;
