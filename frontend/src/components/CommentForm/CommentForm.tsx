// Внешние библиотеки
import { useState } from "react";

// Локальные модули
import { fetchComments } from "../../redux/slices/comments";
import { useAppDispatch } from "../../redux/hooks";
import axios from "./../../axios";

// Стили
import style from "./CommentForm.module.scss";

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
          setText("");
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
