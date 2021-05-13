import React, { useCallback } from "react";
import styled from "styled-components";
import { Card, Avatar, Button } from "antd";

const Profile = ({ setIsLoggedIn }) => {
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <CardContainer
      actions={[
        <div key="post">
          게시물
          <br />0
        </div>,
        <div key="follower">
          팔로워
          <br />0
        </div>,
        <div key="following">
          팔로잉
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>HY</Avatar>} title="HeeYeon.K" />
      <Button onClick={logout}>로그아웃</Button>
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
