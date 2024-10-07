import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import axios from "./../../axios";
import { useNavigate, useParams } from "react-router-dom";
import style from "./WritePost.module.scss";

export const WritePost = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [_isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const inputFileRef = useRef<any>(null);

  const isEditing = Boolean(id);

  const handleChangeFile = async (event: any) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      setImageUrl(data.url);
    } catch (err) {
      console.warn(err);
      alert("Ошибка загрузки файла!");
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl("");
  };

  const onChange = useCallback((value: any) => {
    setText(value);
  }, []);

  const onSubmit = async () => {
    try {
      setIsLoading(true);

      const fields = {
        title,
        imageUrl,
        text,
      };

      const { data } = isEditing
        ? await axios.patch(`/posts/${id}`, fields)
        : await axios.post("/posts", fields);

      const _id = isEditing ? id : data._id;

      navigate(`/post/${_id}`);
    } catch (err) {
      console.warn(err);
      alert("Ошибка при создании статьи");
    }
  };

  useEffect(() => {
    if (id) {
      try {
        axios.get(`/posts/${id}`).then(({ data }: any) => {
          setTitle(data.title);
          setText(data.text);
          setImageUrl(data.imageUrl);
        });
      } catch (err) {
        alert("Ошибка при получении статьи");
        console.warn(err);
      }
    }
  }, []);

  const options = useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
        uniqueId: "my-unique-id",
      },
    }),
    []
  );

  return (
    <>
      <button className={style.btn} onClick={() => inputFileRef.current.click()}>
        Загрузить превью
      </button>
      <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />

      {imageUrl && (
        <>
          <br />
          <img
            className={style.img}
            src={`http://localhost:4444${imageUrl}`}
            alt=""
          />
          <br />
          <button onClick={onClickRemoveImage}>удолить</button>
        </>
      )}

      <h1>
        <input
          className={style.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </h1>

      <SimpleMDE value={text} onChange={onChange} options={options} />

      <br />
      <button className={style.btn} onClick={onSubmit}>
        {isEditing ? "Сохранить" : "Опубликовать"}
      </button>
    </>
  );
};
