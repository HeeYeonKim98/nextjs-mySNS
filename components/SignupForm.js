import React, { useCallback, useState } from "react";
import { Form, Checkbox, Button } from "antd";
import styled from "styled-components";

import CustomInput from "./inputs/CustomInput";
import useInput from "../hooks/useInput";

const SignupForm = () => {
  const [data, setData] = useInput({
    id: "",
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

  const onSubmit = useCallback(() => {}, []);

  return (
    <Form onFinish={onSubmit}>
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
        <Button type="primary" htmlType="submit">
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
