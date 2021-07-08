import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Input, Comment, Avatar } from "antd";
import styled from "styled-components";

import { addCommentRequestAction } from "../actions/post";

const CommentForm = ({ post }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    dispatch(addCommentRequestAction(post.id));
  }, []);

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
