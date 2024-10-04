import  { useState } from "react";
import { ProfileData } from "../../components/ProfileData/ProfileData";
import { Tabs } from "../../components/Tabs/Tabs";
import { Auth } from "../../components/Auth/Auth";

export const ProfilePage = () => {
  const [userRegisted, _setUserRegisted] = useState(false);

  return (
    <>
      {userRegisted ? (
        <>
          <ProfileData />
          <Tabs />
        </>
      ) : (
        <>
          <Auth />
        </>
      )}
    </>
  );
};
