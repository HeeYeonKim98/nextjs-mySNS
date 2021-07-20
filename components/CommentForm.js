import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Comment, Avatar } from "antd";
import styled from "styled-components";

import { addCommentRequestAction } from "../actions/post";

import useInput from "../hooks/useInput";

// TODO: 19-22, data name 선언 변경

const CommentForm = ({ post }) => {
  const [data, onChangeData, setData] = useInput({ text: "" });
  const email = useSelector((state) => state.User.user?.email);
  const { isCommented } = useSelector((state) => state.Post);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isCommented) {
      setData({ ...data, text: "" });
    }
  }, [isCommented]);

  const onSubmit = useCallback(() => {
    dispatch(
      addCommentRequestAction({ id: post.id, content: data.text, email })
    );
  }, [data.text, email]);

  return (
    <Form onFinish={onSubmit}>
      <Comment
        avatar={<Avatar>💬</Avatar>}
        content={
          <>
            <Input.TextArea
              name="text"
              value={data.text}
              onChange={onChangeData}
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
