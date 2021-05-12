import React from "react";

import AppHead from "../components/AppHead";
import InfoEditForm from "../components/InfoEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [{ name: "예진" }, { name: "성현" }, { name: "수린" }, { name: "희연" }];
  const followingList = [{ name: "조슈아" }, { name: "도겸" }, { name: "승관" }, { name: "디노" }];

  return (
    <>
      <AppHead headtitle="내 프로필 | my SNS" />
      <InfoEditForm />
      <FollowList header="팔로워 목록" data={followerList} />
      <FollowList header="팔로잉 목록" data={followingList} />
    </>
  );
};

export default Profile;
