// Внешние библиотеки
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

// Локальные модули
import { Header } from "./components/Header/Header";
import { MainWrapper } from "./components/MainWrapper/MainWrapper";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { WritePost } from "./components/WritePost/WritePost";
import { Path } from "./constants/constants";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { PopularPage } from "./pages/PopularPage/PopularPage";
import { YouPostPage } from "./pages/YouPostPage/YouPostPage";
import { FullPostPage } from "./pages/FullPostPage/FullPostPage";
import { useAppDispatch } from "./redux/hooks";
import { fetchAuthMe } from "./redux/slices/auth";
import { ProfileEdit } from "./components/ProfileEdit/ProfileEdit";
import { PhotoPostsPage } from "./pages/PhotoPostsPage/PhotoPostsPage";

// Стили
import style from "./App.module.scss";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <div className={style.container}>
        <div className={style.wrap}>
          <Sidebar />
          <MainWrapper>
            <Header />
            <Routes>
              <Route path={Path.Home} element={<HomePage />} />
              <Route path={Path.Popular} element={<PopularPage />} />
              <Route path={Path.YourPosts} element={<YouPostPage />} />
              <Route path={Path.Profile} element={<ProfilePage />} />
              <Route path={Path.FullPost} element={<FullPostPage />} />
              <Route path={Path.EditPost} element={<WritePost />} />
              <Route path={Path.EditProfile} element={<ProfileEdit />} />
              <Route path={Path.PhotoPosts} element={<PhotoPostsPage />} />
            </Routes>
          </MainWrapper>
        </div>
      </div>
    </>
  );
}

export default App;
