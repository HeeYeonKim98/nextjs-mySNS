import { Avatar, Button, Comment, Form, Input } from "antd";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addCommentRequestAction } from "../actions/post";
import styled from "styled-components";
import useInput from "../hooks/useInput";

// TODO: 19-22, data name 선언 변경

const CommentForm = ({ post }) => {
  const [data, onChangeData, setData] = useInput({ text: "" });
  const email = useSelector((state) => state.User.user?.email);
  const { addCommentDone } = useSelector((state) => state.Post);
  const dispatch = useDispatch();

  useEffect(() => {
    if (addCommentDone) {
      setData({ ...data, text: "" });
    }
  }, [addCommentDone]);

  const onSubmit = useCallback(() => {
    dispatch(
      addCommentRequestAction({
        userId: email,
        postId: post.id,
        content: data.text,
      })
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
