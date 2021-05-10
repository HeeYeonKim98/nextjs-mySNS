import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import { Button, Form, Input } from "antd";

const LoginForm = ({ setIsLoggedIn }) => {
  const [inputs, setInputs] = useState({ uId: "", password: "" });

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs({
      [name]: value,
    });
  });

  const onSubmit = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <FormContainer onFinish={onSubmit}>
      <div>
        <label htmlFor="uId">아이디</label>
        <Input name="id" value={inputs.uId} onChange={onChange}></Input>
        <label htmlFor="password">비밀번호</label>
        <Input
          type="password"
          name="password"
          value={inputs.password}
          onChange={onChange}
          required
        ></Input>
      </div>

      <ButtonStyle>
        <Button type="primary" htmlType="submit">
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonStyle>
    </FormContainer>
  );
};

const ButtonStyle = styled.div`
  margin-top: 10px;
`;

const FormContainer = styled(Form)`
  padding: 15px;
`;

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.elementType.isRequired,
};

export default LoginForm;
