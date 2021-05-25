import React from "react";
import { Card, Avatar } from "antd";
import styled from "styled-components";

import PostCardActions from "./PostCardActions";
import PostImage from "./PostImage";
import PostContent from "./PostContent";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import useToggle from "../hooks/useToggle";

const PostCard = ({ post }) => {
  const [commentForm, setCommentForm] = useToggle(false);

  return (
    <CardContainer>
      <Card actions={PostCardActions(post, setCommentForm)}>
        <Card.Meta avatar={<Avatar>HY</Avatar>} title="HeeYeon.K" />
        <PostImage image={post.Images} />
        <PostContent content={post.content} />
      </Card>

      {commentForm && (
        <>
          <CommentList post={post} />
          <CommentForm post={post} />
        </>
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  padding: 10px;
  margin: 10px;
  margin-bottom: 10px;
`;

export default PostCard;
