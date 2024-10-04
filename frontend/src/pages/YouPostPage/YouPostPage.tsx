import { WritePost } from "../../components/WritePost/WritePost";
import { useAppSelector } from "../../redux/hooks";
import { selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";

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
