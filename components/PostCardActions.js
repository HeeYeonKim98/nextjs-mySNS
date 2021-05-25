import React from "react";
import { useSelector } from "react-redux";
import { Popover, Button } from "antd";
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
//로그인된 정보랑 게시글의 아이디가 같으면
const PostCardActions = (post) => {
  const id = useSelector((state) => state.User.user?.id);

  return [
    <RetweetOutlined key="retweet" />,
    <HeartOutlined key="heart" />,
    <MessageOutlined key="comment" />,
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
