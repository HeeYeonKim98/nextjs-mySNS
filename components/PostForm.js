import React, { useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";
import styled from "styled-components";

import { addPostRequestAction } from "../actions/post";

import useInput from "../hooks/useInput";

const PostForm = () => {
  const [data, onChangeData, setData] = useInput({ text: "" });
  const { imagePaths, isPosted } = useSelector((state) => state.Post);
  const dispatch = useDispatch();
  const imageRef = useRef();

  useEffect(() => {
    if (isPosted) {
      setData({ ...data, text: "" });
    }
  }, [isPosted]);

  const onSubmit = useCallback(() => {
    dispatch(addPostRequestAction(data.text));
  }, [data.text]);

  //? 첨부파일에 접근할 수 있는 이벤트 함수
  const onClickImageUpload = useCallback(() => {
    imageRef.current.click();
  }, [imageRef.current]);

  return (
    <FormContainer>
      <Form onFinish={onSubmit}>
        <Input.TextArea
          name="text"
          value={data.text}
          onChange={onChangeData}
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
