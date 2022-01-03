import { Button, Popover } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { deletePostRequestAction } from "../actions/post";
import useToggle from "../hooks/useToggle";

const PostCardActions = (post, toggleCommentForm) => {
  const [liked, toggleLike] = useToggle(false);
  const { deletePostLoading } = useSelector((state) => state.Post);
  const id = useSelector((state) => state.User.user?.id);
  const dispatch = useDispatch();
  const onClickDeletePost = () => {
    dispatch(deletePostRequestAction({ id: post.id }));
  };

  return [
    <RetweetOutlined key="retweet" />,
    liked ? (
      <HeartTwoTone key="heart" twoToneColor="#FA6B83" onClick={toggleLike} />
    ) : (
      <HeartOutlined key="heart" onClick={toggleLike} />
    ),
    <MessageOutlined key="comment" onClick={toggleCommentForm} />,
    <Popover
      key="more"
      content={
        <Button.Group>
          {id === post.User.id ? (
            <>
              <Button type="primary">수정</Button>
              <Button
                type="danger"
                loading={deletePostLoading}
                onClick={onClickDeletePost}
              >
                삭제
              </Button>
            </>
          ) : (
            <Button>신고</Button>
          )}
        </Button.Group>
      }
    >
      <EllipsisOutlined key="" />
    </Popover>,
  ];
};

export default PostCardActions;
