import React from "react";
import { useSelector } from "react-redux";
import { Popover, Button } from "antd";
import {
  RetweetOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

import useToggle from "../hooks/useToggle";

const PostCardActions = (post, setCommentForm) => {
  const [liked, setLiked] = useToggle(false);
  const id = useSelector((state) => state.User.user?.id);

  return [
    <RetweetOutlined key="retweet" />,
    liked ? (
      <HeartTwoTone key="heart" twoToneColor="#FA6B83" onClick={setLiked} />
    ) : (
      <HeartOutlined key="heart" onClick={setLiked} />
    ),
    <MessageOutlined key="comment" onClick={setCommentForm} />,
    <Popover
      key="more"
      content={
        <Button.Group>
          {id === post.User.id ? (
            <>
              <Button type="primary">수정</Button>
              <Button type="danger">삭제</Button>
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
