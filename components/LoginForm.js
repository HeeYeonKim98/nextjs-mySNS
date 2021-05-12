import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "styled-components";
import { Button, Form } from "antd";

import CustomInput from "../components/inputs/CustomInput";

const LoginForm = ({ setIsLoggedIn }) => {
  const [inputs, setInputs] = useState({ id: "", password: "" });

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  });

  const onSubmit = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <FormContainer onFinish={onSubmit}>
      <div>
        <CustomInput label="아이디" type="text" name="id" value={inputs.id} onChange={onChange} />
        <CustomInput
          label="비밀번호"
          type="password"
          name="password"
          value={inputs.password}
          onChange={onChange}
        />
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
  padding: 20px;
  margin: 20px;
  background-color: #f2f2f2;
  border-radius: 4px;
`;

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.elementType.isRequired,
};

export default LoginForm;
