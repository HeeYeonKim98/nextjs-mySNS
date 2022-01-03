import { Button, Checkbox, Form } from "antd";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomInput from "./inputs/CustomInput";
import { signUpRequestAction } from "../actions/user";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import useToggle from "../hooks/useToggle";

const SignupForm = () => {
  const dispatch = useDispatch();
  const { signupLoading } = useSelector((state) => state.User);
  const [data, onChangeData] = useInput({
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
  });
  const [passwordError, setPasswordError] = useToggle(false);
  const [checkbox, toggleCheckbox] = useToggle(false);

  useEffect(() => {
    if (data.password !== data.passwordCheck) {
      return setPasswordError(true);
    }
    return setPasswordError(false);
  }, [data.password, data.passwordCheck]);

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
          onChange={onChangeData}
        />
        <CustomInput
          label="비밀번호"
          type="password"
          name="password"
          value={data.password}
          onChange={onChangeData}
        />
        <CustomInput
          label="비밀번호 확인"
          type="password"
          name="passwordCheck"
          value={data.passwordCheck}
          onChange={onChangeData}
        />
        {passwordError && (
          <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
        )}
        <CustomInput
          label="이름"
          type="text"
          name="name"
          value={data.name}
          onChange={onChangeData}
        />
        <br />
      </div>

      <div>
        <Checkbox checked={checkbox} onChange={toggleCheckbox}>
          본인은 제 3자의 개인정보 수집이용에 동의합니다.
        </Checkbox>
        {!checkbox && <ErrorMessage>약관 동의가 필요합니다.</ErrorMessage>}
      </div>

      <ButtonContainer>
        <Button type="primary" htmlType="submit" loading={signupLoading}>
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
