import { useEffect, useRef, useState } from "react";
import { Button } from "../Button/Button";
import style from "./WritePost.module.scss";
import { FaImage } from "react-icons/fa";

export const WritePost = () => {
  const [userRegisted, setUserRegisted] = useState(true);

  const placeholder = "Введите текст...";
  const [text, setText] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Функция для автоматической регулировки высоты
  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Сбрасываем высоту
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Устанавливаем новую высоту
    }
  };

  useEffect(() => {
    adjustTextareaHeight(); // Регулируем высоту при монтировании компонента
  }, [text]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    adjustTextareaHeight(); // Регулируем высоту при каждом изменении текста
  };

  return (
    <>
      {userRegisted && (
        <div className={style.wrap}>
          <div className={style.header}>
            <img
              className={style.img}
              src="https://via.placeholder.com/40"
              alt=""
            />
            <textarea
              ref={textareaRef}
              value={text}
              placeholder={placeholder}
              onChange={handleInput}
              rows={1} // Минимальное количество строк
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                resize: "none", // Отключаем возможность ручного изменения размера
                overflow: "hidden", // Скрываем скролл, так как высота автоматически изменяется
              }}
            />
          </div>
          <div className={style.footer}>
            <FaImage className={style.icon} />
            <Button label="Tweet" onClick={() => {}} />
          </div>
        </div>
      )}
    </>
  );
};
