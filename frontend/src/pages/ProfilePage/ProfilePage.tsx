import React, { useState } from "react";
import { Profile } from "../../components/Profile/Profile";
import { ProfileData } from "../../components/ProfileData/ProfileData";
import { Tabs } from "../../components/Tabs/Tabs";
import { Auth } from "../../components/Auth/Auth";

export const ProfilePage = () => {
  const [userRegisted, setUserRegisted] = useState(false);

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
