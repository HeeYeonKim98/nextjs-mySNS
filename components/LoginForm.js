import { Button, Form } from "antd";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import CustomInput from "./inputs/CustomInput";
import Link from "next/link";
import { loginRequestAction } from "../actions/user";
import styled from "styled-components";
import useInput from "../hooks/useInput";

const LoginForm = () => {
  const [data, onChangeData] = useInput({ email: "", password: "" });
  const { loginLoading } = useSelector((state) => state.User);
  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    dispatch(loginRequestAction(data));
  }, [data]);

  return (
    <FormContainer onFinish={onSubmit}>
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
      </div>

      <ButtonContainer>
        <Button type="primary" htmlType="submit" loading={loginLoading}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonContainer>
    </FormContainer>
  );
};

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const FormContainer = styled(Form)`
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
  border: 2px solemail #f2f2f2;
`;

export default LoginForm;
