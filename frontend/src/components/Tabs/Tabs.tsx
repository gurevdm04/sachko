// Внешние библиотеки
import { Tab, Tabs as TabsWrap, TabList, TabPanel } from "react-tabs";

// Стили
import "react-tabs/style/react-tabs.css";
import style from "./Tabs.module.scss";

export const Tabs = () => {
  return (
    <TabsWrap className={style.wrap}>
      <TabList className={style.list}>
        <Tab className={style.item} selectedClassName={style.active}>
          Your posts
        </Tab>
        <Tab className={style.item} selectedClassName={style.active}>
          Liked posts
        </Tab>
      </TabList>

      <TabPanel>
        {/* <PostCard /> */}
        {/* <PostCard /> */}
        {/* <PostCard /> */}
      </TabPanel>
      <TabPanel>{/* <PostCard /> */}</TabPanel>
    </TabsWrap>
  );
};
