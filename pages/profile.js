import React from "react";

import AppHead from "../components/AppHead";
import InfoEditForm from "../components/InfoEditForm";
import Follower from "../components/Follower";
import Following from "../components/Following";

const Profile = () => {
  return (
    <>
      <AppHead headtitle="my profile" />
      <InfoEditForm />
      <Follower />
      <Following />
    </>
  );
};

export default Profile;
