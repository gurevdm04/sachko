import { useForm } from "react-hook-form";
import style from "./../Auth.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchAuth, selectIsAuth } from "../../../redux/slices/auth";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    // setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "test@test.ru",
      password: "123456",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: any) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      alert("Не удалоь авторизоватаься");
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
        type="email"
        placeholder="your login"
        {...register("email", { required: "Укажите почту" })}
      />
      {errors.email?.message ? <p>{errors.email?.message}</p> : null}
      <input
        className={style.input}
        type="password"
        placeholder="****"
        {...register("password", { required: "Введите пароль", min: 5 })}
      />
      {errors.password?.message ? <p>{errors.password?.message}</p> : null}

      <button disabled={!isValid} type="submit">
        логин
      </button>
    </form>
  );
};
