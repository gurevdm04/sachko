// Внешние библиотеки
import { Navigate } from "react-router-dom";

// Локальные модули
import { WritePost } from "../../components/WritePost/WritePost";
import { useAppSelector } from "../../redux/hooks";
import { selectIsAuth } from "../../redux/slices/auth";

// Стили

export const YouPostPage = () => {
  const isAuth = useAppSelector(selectIsAuth);

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <WritePost />
      {/* <PostList /> */}
    </>
  );
};
