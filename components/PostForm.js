import React, { useCallback, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";
import styled from "styled-components";

import { addPostAction } from "../actions/post";

const PostForm = () => {
  const [text, setText] = useState("");
  const { imagePaths } = useSelector((state) => state.Post);
  const dispatch = useDispatch();
  const imageRef = useRef();

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    dispatch(addPostAction);
    setText("");
  }, []);

  //? 첨부파일에 접근할 수 있는 이벤트 함수
  const onClickImageUpload = useCallback(() => {
    imageRef.current.click();
  }, [imageRef.current]);

  return (
    <FormContainer>
      <Form onFinish={onSubmit}>
        <Input.TextArea
          name="text"
          value={text}
          onChange={onChangeText}
          maxLength={140}
          placeholder="오늘은 어떤 일이 있었나요?"
        />

        <ButtonContainer>
          <input type="file" multiple hidden ref={imageRef} />
          <Button onClick={onClickImageUpload}>첨부파일</Button>
          <ButtonStyle htmlType="submit" type="primary">
            공유
          </ButtonStyle>
        </ButtonContainer>

        <div>
          {imagePaths.map((value) => {
            return (
              <div key={value}>
                <img alt={value} />
                <Button>삭제</Button>
              </div>
            );
          })}
        </div>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  padding: 10px;
  margin: 10px;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
`;
const ButtonStyle = styled(Button)`
  float: right;
`;

export default PostForm;
