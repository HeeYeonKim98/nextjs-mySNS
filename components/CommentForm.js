import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Comment, Avatar } from "antd";
import styled from "styled-components";

import { addCommentRequestAction } from "../actions/post";

// TODO: 19-22, data name 선언 변경

const CommentForm = ({ post }) => {
  const [text, setText] = useState("");
  const email = useSelector((state) => state.User.user?.email);
  const { isCommented } = useSelector((state) => state.Post);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isCommented) {
      setText("");
    }
  }, [isCommented]);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    const data = { id: post.id, content: text, email };
    dispatch(addCommentRequestAction(data));
  }, [text, email]);

  return (
    <Form onFinish={onSubmit}>
      <Comment
        avatar={<Avatar>💬</Avatar>}
        content={
          <>
            <Input.TextArea
              name="text"
              value={text}
              onChange={onChangeText}
              maxLength={140}
              placeholder="댓글을 남겨주세요."
            />
            <ButtonStyle type="primary" htmlType="submit">
              확인
            </ButtonStyle>
          </>
        }
      />
    </Form>
  );
};

const ButtonStyle = styled(Button)`
  margin-top: 10px;
  float: right;
`;

export default CommentForm;
