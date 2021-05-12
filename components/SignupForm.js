import React, { useCallback, useState } from "react";
import { Form, Checkbox, Button } from "antd";
import styled from "styled-components";

import CustomInput from "./inputs/CustomInput";

const SignupForm = () => {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
    name: "",
    passwordCheck: "",
    passwordError: true,
    checkboxError: true,
  });

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }, []);

  const onSubmit = useCallback(() => {}, []);

  return (
    <Form onFinish={onSubmit}>
      <div>
        <CustomInput label="아이디" type="text" name="id" value={inputs.id} onChange={onChange} />
        <CustomInput
          label="비밀번호"
          type="password"
          name="password"
          value={inputs.password}
          onChange={onChange}
        />
        <CustomInput
          label="비밀번호 확인"
          type="password"
          name="passwordCheck"
          value={inputs.passwordCheck}
          onChange={onChange}
        />
        {inputs.passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        <CustomInput label="이름" type="text" name="name" value={inputs.name} onChange={onChange} />
        <br />
      </div>

      <div>
        <Checkbox>본인은 제 3자의 개인정보 수집이용에 동의합니다.</Checkbox>
        {inputs.checkboxError && <ErrorMessage>약관 동의가 필요합니다.</ErrorMessage>}
      </div>

      <div>
        <Button>확인</Button>
      </div>
    </Form>
  );
};

const ErrorMessage = styled.div`
  color: red;
`;

export default SignupForm;
