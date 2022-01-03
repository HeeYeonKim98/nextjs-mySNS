import AppHead from "../components/AppHead";
import FollowList from "../components/FollowList";
import InfoEditForm from "../components/InfoEditForm";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.User);

  return (
    <>
      <AppHead headtitle="내 프로필 | my SNS" />
      <Container>
        <InfoEditForm />
        <FollowList header="팔로워 목록" data={user.Followers} />
        <FollowList header="팔로잉 목록" data={user.Followings} />
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 10px;
  margin: 10px;
`;

export default Profile;
