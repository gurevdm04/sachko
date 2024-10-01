import { Route, Routes } from "react-router-dom";
import style from "./App.module.scss";
import { Auth } from "./components/Auth/Auth";
import { Header } from "./components/Header/Header";
import { MainWrapper } from "./components/MainWrapper/MainWrapper";
import { PostList } from "./components/PostList/PostList";
import { ProfileData } from "./components/ProfileData/ProfileData";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Tabs } from "./components/Tabs/Tabs";
import { WritePost } from "./components/WritePost/WritePost";
import { Path } from "./constants/constants";
import { HomePage } from "./pages/HomePage/HomePage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { PopularPage } from "./pages/PopularPage/PopularPage";
import { YouPostPage } from "./pages/YouPostPage/YouPostPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  });
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
            </Routes>
          </MainWrapper>
        </div>
      </div>
    </>
  );
}

export default App;
