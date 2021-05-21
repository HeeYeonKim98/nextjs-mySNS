import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { Button, Form } from "antd";
import styled from "styled-components";

import CustomInput from "../components/inputs/CustomInput";
import useInput from "../hooks/useInput";
import { loginAction } from "../actions/User";

const LoginForm = () => {
  const [data, setData] = useInput({ id: "", password: "" });
  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    dispatch(loginAction({ id: data.id, password: data.password }));
  }, []);

  return (
    <FormContainer onFinish={onSubmit}>
      <div>
        <CustomInput
          label="아이디"
          type="text"
          name="id"
          value={data.id}
          onChange={setData}
        />
        <CustomInput
          label="비밀번호"
          type="password"
          name="password"
          value={data.password}
          onChange={setData}
        />
      </div>

      <ButtonContainer>
        <Button type="primary" htmlType="submit">
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
  border: 2px solid #f2f2f2;
`;

export default LoginForm;
