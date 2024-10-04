import { useState } from "react";
import style from "./Auth.module.scss";
import { Login } from "./Login/Login";
import { Registration } from "./Registration/Registration";

export const Auth = () => {
  const [status, setStatus] = useState<"login" | "register">("login");

  const handleStatus = () => {
    if (status === "login") setStatus("register");
    if (status === "register") setStatus("login");
  };

  return (
    <div className={style.wrap}>
      <h2 className={style.title}>
        {status === "login" && "Login"}
        {status === "register" && "Register"}
      </h2>

      {status === "login" && <Login />}

      {status === "register" && <Registration />}

      {status === "login" && (
        <p>
          Don't you have an account?{" "}
          <a onClick={handleStatus} href="#">
            Register!
          </a>
        </p>
      )}
      {status === "register" && (
        <p>
          Do you have an account?{" "}
          <a onClick={handleStatus} href="#">
            Come in!
          </a>
        </p>
      )}
    </div>
  );
};
