import { useCallback, useMemo, useRef, useState } from "react";
import SimpleMdeReact from "react-simplemde-editor";
import axios from "./../../axios";
import { useNavigate } from "react-router-dom";
// import { useAppSelector } from "../../redux/hooks";
// import { selectIsAuth } from "../../redux/slices/auth";

export const EditPostPage = () => {
  const navigate = useNavigate();

  // const isAuth = useAppSelector(selectIsAuth);
  const [_isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const inputFileRef = useRef<any>(null);

  const handleChangeFile = async (event: any) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      console.log(data);
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

      const { data } = await axios.post("/posts", fields);

      const id = data._id;

      navigate(`/post/${id}`);
    } catch (err) {
      console.warn(err);
      alert("Ошибка при создании статьи");
    }
  };

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
      <button onClick={() => inputFileRef.current.click()}>
        Загрузить превью
      </button>
      <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />

      {imageUrl && (
        <>
          <br />
          <img src={`http://localhost:4444${imageUrl}`} alt="" />
          <br />
          <button onClick={onClickRemoveImage}>удолить</button>
        </>
      )}

      <h1>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </h1>

      <SimpleMdeReact value={text} onChange={onChange} options={options} />

      <br />
      <button onClick={onSubmit}>опубликовать</button>
    </>
  );
};
