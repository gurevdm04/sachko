import { useState } from "react";
import style from "./Auth.module.scss";

export const Auth = () => {
  const [isLogin, setIsLogin] = useState();
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

      <form className={style.form} action="">
        {status === "login" && (
          <>
            <input
              required
              className={style.input}
              type="text"
              name="name"
              placeholder="your login"
            />
            <input
              required
              className={style.input}
              type="password"
              name="pass"
              placeholder="****"
            />
          </>
        )}

        {status === "register" && (
          <>
            <input
              required
              className={style.input}
              type="text"
              name="name"
              placeholder="your login"
            />
            <input
              required
              className={style.input}
              type="password"
              name="pass"
              placeholder="password"
            />
            <input
              required
              className={style.input}
              type="password"
              name="pass"
              placeholder="repeat password"
            />
          </>
        )}

        <button className={style.btn}>login</button>
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
      </form>
    </div>
  );
};
