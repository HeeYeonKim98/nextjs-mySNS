import { Avatar, Button, Comment, Form, Input } from "antd";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addCommentRequestAction } from "../actions/post";
import styled from "styled-components";
import useInput from "../hooks/useInput";

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
        avatar={<Avatar>๐ฌ</Avatar>}
        content={
          <>
            {email !== undefined ? (
              <Input.TextArea
                name="text"
                value={data.text}
                onChange={onChangeData}
                maxLength={140}
                placeholder="๋๊ธ์ ๋จ๊ฒจ์ฃผ์ธ์."
              />
            ) : (
              <Input.TextArea
                disabled
                maxLength={140}
                placeholder="๋ก๊ทธ์ธ์ด ํ์ํ ๊ธฐ๋ฅ์๋๋ค."
              />
            )}

            <ButtonStyle type="primary" htmlType="submit">
              ํ์ธ
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
