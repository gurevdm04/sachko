import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useCallback, useMemo } from "react";
import axios from "./../../axios";
import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import style from "./ProfileEdit.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchAuthMe } from "../../redux/slices/auth";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export const ProfileEdit = () => {
  const [name, setName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const dispatch = useAppDispatch();
  console.log("avatarUrl", avatarUrl);

  const data = useAppSelector((state) => state.auth.data);

  useEffect(() => {
    setName(data ? data.fullName : "");
    setAvatarUrl(data ? data.avatarUrl : "");
  }, [data]);

  // ---------------

  const { id } = useParams();

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [imageUrl, setImageUrl] = useState("");
  const inputFileRef = useRef<any>(null);

  const handleChangeFile = async (event: any) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      console.log(data.url);

      setImageUrl(data.url);
    } catch (err) {
      console.warn(err);
      alert("Ошибка загрузки файла!");
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl("");
  };

  const onSubmit = async () => {
    try {
      const fields = {
        fullName: name,
        imageUrl,
      };
      console.log(fields);

      await axios.patch(`/auth`, fields);

      // const { data } = isEditing
      //   ? await axios.patch(`/posts/${id}`, fields)
      //   : await axios.post("/posts", fields);

      // const _id = isEditing ? id : data._id;
      dispatch(fetchAuthMe());
      navigate(`/profile`);
    } catch (err) {
      console.warn(err);
      alert("Ошибка при создании статьи");
    }
  };

  useEffect(() => {
    if (id) {
      try {
        axios.get(`/posts/${id}`).then(({ data }: any) => {
          setImageUrl(data.imageUrl);
        });
      } catch (err) {
        alert("Ошибка при получении статьи");
        console.warn(err);
      }
    }
  }, []);

  // ---------------
  console.log("avatarUrl", avatarUrl);

  return (
    <>
      <div className={style.wrap}>
        <div className={style.goback}>
          <IoArrowBackCircleSharp onClick={goBack} />
        </div>
        <img
          className={style.img}
          src={imageUrl ? "http://localhost:4444" + imageUrl : avatarUrl}
          alt=""
        />
        <input
          ref={inputFileRef}
          type="file"
          onChange={handleChangeFile}
          hidden
        />

        <div className={style.btns}>
          <button
            className={style.btn}
            onClick={() => inputFileRef.current.click()}
          >
            Загрузить превью
          </button>
          <button className={style.btn} onClick={onClickRemoveImage}>
            Удалить превью
          </button>
        </div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={style.input}
          placeholder="Введите ваше имя"
        />
        <button onClick={onSubmit} className={`${style.submit} ${style.btn}`}>
          Обновить данные
        </button>
      </div>
    </>
  );
};
