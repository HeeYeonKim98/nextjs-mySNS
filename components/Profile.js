import React, { useCallback } from "react";
import styled from "styled-components";
import { Card, Avatar, Button } from "antd";

const Profile = ({ setIsLoggedIn }) => {
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <CardContainer>
      <Card
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
      </Card>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  padding: 10px;
`;

export default Profile;
