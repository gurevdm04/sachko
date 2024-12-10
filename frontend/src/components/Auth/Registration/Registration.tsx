// Внешние библиотеки
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

// Локальные модули
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchRegister, selectIsAuth } from "../../../redux/slices/auth";

// Стили
import style from "./../Auth.module.scss";

export const Registration = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    // setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: any) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      alert("Не удалоь зарегистрироваться");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className={style.input}
        type="text"
        placeholder="Ваше имя"
        {...register("fullName", { required: "Укажите полное имя" })}
      />
      {errors.fullName?.message ? <p>{errors.fullName?.message}</p> : null}

      <input
        className={style.input}
        type="email"
        placeholder="Ваша почта"
        {...register("email", { required: "Укажите почту" })}
      />
      {errors.email?.message ? <p>{errors.email?.message}</p> : null}

      <input
        className={style.input}
        type="password"
        placeholder="***"
        min={5}
        {...register("password", { required: "Введите пароль", min: 5 })}
      />
      {errors.password?.message ? <p>{errors.password?.message}</p> : null}

      <button disabled={!isValid} type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
};
