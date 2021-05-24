import React from "react";
import { Card, Avatar, Popover, Button } from "antd";
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

import PostImage from "./PostImage";
import PostContent from "./PostContent";

const PostCard = ({ post }) => {
  return (
    <CardContainer>
      <Card
        actions={[
          <RetweetOutlined key="retweet" />,
          <HeartOutlined key="heart" />,
          <MessageOutlined
            key="comment"
            content={
              <Button.Group>
                <Button>수정</Button>
                <Button type="ghost">삭제</Button>
                <Button type="dashed">신고</Button>
              </Button.Group>
            }
          />,
          <Popover key="more">
            <EllipsisOutlined key="" />
          </Popover>,
        ]}
      >
        <PostImage />
        <Card.Meta avatar={<Avatar>HY</Avatar>} title="HeeYeon.K" />

        <PostContent />
      </Card>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  padding: 10px;
  margin: 10px;
  margin-bottom: 10px;
`;

export default PostCard;
