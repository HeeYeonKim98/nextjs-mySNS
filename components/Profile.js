import { Avatar, Button, Card } from "antd";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logoutRequestAction } from "../actions/user";
import styled from "styled-components";

const Profile = () => {
  const dispatch = useDispatch();
  const { logoutLoading, user } = useSelector((state) => state.User);
  console.log(user);
  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <CardContainer
      actions={[
        <div key="post">
          게시물
          <br />
          {user.Posts.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {user.Followers.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {user.Followings.length}
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>{user.name[0]}</Avatar>} title={user.name} />
      <Button onClick={onLogOut} loading={logoutLoading}>
        로그아웃
      </Button>
    </CardContainer>
  );
};

const CardContainer = styled(Card)`
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
  border: 2px solid #f2f2f2;
`;

export default Profile;
