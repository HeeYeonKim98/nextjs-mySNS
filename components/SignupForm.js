import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Checkbox, Button } from "antd";
import styled from "styled-components";

import { signUpRequestAction } from "../actions/user";

import CustomInput from "./inputs/CustomInput";
import useInput from "../hooks/useInput";

const SignupForm = () => {
  const dispatch = useDispatch();
  const { isSigningUp } = useSelector((state) => state.User);
  const [data, setData] = useInput({
    email: "",
    password: "",
    name: "",
  });

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== data.password);
    },
    [data.password]
  );

  const [checkbox, setCheckbox] = useState(false);
  const onChangeCheckbox = useCallback((e) => {
    setCheckbox(e.target.checked);
  });

  const onSubmit = useCallback(() => {
    dispatch(signUpRequestAction(data));
  }, [data]);

  return (
    <Form onFinish={onSubmit}>
      <div>
        <CustomInput
          label="이메일"
          type="email"
          name="email"
          value={data.email}
          onChange={setData}
        />
        <CustomInput
          label="비밀번호"
          type="password"
          name="password"
          value={data.password}
          onChange={setData}
        />
        <CustomInput
          label="비밀번호 확인"
          type="password"
          name="passwordCheck"
          value={passwordCheck}
          onChange={onChangePasswordCheck}
        />
        {passwordError && (
          <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
        )}
        <CustomInput
          label="이름"
          type="text"
          name="name"
          value={data.name}
          onChange={setData}
        />
        <br />
      </div>

      <div>
        <Checkbox checked={checkbox} onChange={onChangeCheckbox}>
          본인은 제 3자의 개인정보 수집이용에 동의합니다.
        </Checkbox>
        {!checkbox && <ErrorMessage>약관 동의가 필요합니다.</ErrorMessage>}
      </div>

      <ButtonContainer>
        <Button type="primary" htmlType="submit" loading={isSigningUp}>
          확인
        </Button>
      </ButtonContainer>
    </Form>
  );
};

const ErrorMessage = styled.div`
  color: red;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export default SignupForm;
