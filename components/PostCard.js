import React from "react";
// import { useSelector } from "react-redux";
import { Card, Avatar } from "antd";
import styled from "styled-components";

import PostCardActions from "./PostCardActions";
import PostImage from "./PostImage";
import PostContent from "./PostContent";

const PostCard = ({ post }) => {
  return (
    <CardContainer>
      <Card actions={PostCardActions(post)}>
        <PostImage />
        <Card.Meta avatar={<Avatar>HY</Avatar>} title="HeeYeon.K" />
        <PostContent content={post.content} />
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
