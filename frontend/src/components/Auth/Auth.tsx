// Внешние библиотеки
import { useState } from "react";

// Локальные модули
import { Login } from "./Login/Login";
import { Registration } from "./Registration/Registration";

// Стили
import style from "./Auth.module.scss";

export const Auth = () => {
  const [status, setStatus] = useState<"login" | "register">("login");

  const handleStatus = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    if (status === "login") setStatus("register");
    if (status === "register") setStatus("login");
  };

  return (
    <div className={style.wrap}>
      <h2 className={style.title}>
        {status === "login" && "Авторизация"}
        {status === "register" && "Регистрация"}
      </h2>

      {status === "login" && <Login />}

      {status === "register" && <Registration />}

      {status === "login" && (
        <p>
          У вас нет аккаунта?{" "}
          <a onClick={handleStatus} href="#">
            Зарегистрируйтесь!
          </a>
        </p>
      )}
      {status === "register" && (
        <p>
          У вас усть аккаунт?{" "}
          <a onClick={handleStatus} href="#">
            Войдите тут!
          </a>
        </p>
      )}
    </div>
  );
};
