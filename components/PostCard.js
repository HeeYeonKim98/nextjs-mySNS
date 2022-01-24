import { Avatar, Card } from "antd";

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import FollowButton from "./FollowButton";
import PostCardActions from "./PostCardActions";
import PostContent from "./PostContent";
import PostImage from "./PostImage";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import useToggle from "../hooks/useToggle";

const PostCard = ({ post }) => {
  const [commentForm, toggleCommentForm] = useToggle(false);
  const id = useSelector((state) => state.User.user?.id);

  return (
    <CardContainer>
      <Card
        actions={PostCardActions(post, toggleCommentForm)}
        extra={id && <FollowButton post={post} />}
      >
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
