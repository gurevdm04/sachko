import { useState } from "react";
import { ProfileData } from "../../components/ProfileData/ProfileData";
import { Tabs } from "../../components/Tabs/Tabs";
import { Auth } from "../../components/Auth/Auth";
import { useAppSelector } from "../../redux/hooks";
import { selectIsAuth } from "../../redux/slices/auth";

export const ProfilePage = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <>
      {isAuth ? (
        <>
          <ProfileData />
          {/* <Tabs /> */}
        </>
      ) : (
        <>
          <Auth />
        </>
      )}
    </>
  );
};
