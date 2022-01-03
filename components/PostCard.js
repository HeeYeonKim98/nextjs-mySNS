import { Avatar, Card } from "antd";

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import PostCardActions from "./PostCardActions";
import PostContent from "./PostContent";
import PostImage from "./PostImage";
import React from "react";
import styled from "styled-components";
import useToggle from "../hooks/useToggle";

const PostCard = ({ post }) => {
  const [commentForm, toggleCommentForm] = useToggle(false);

  return (
    <CardContainer>
      <Card actions={PostCardActions(post, toggleCommentForm)}>
        <Card.Meta
          avatar={<Avatar>{post.User.name[0]}</Avatar>}
          title={post.User.name}
        />
        {post.Images[0] != null && <PostImage image={post.Images} />}
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
