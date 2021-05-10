import React from "react";
import styled from "styled-components";
import { Form, Input } from "antd";

const InfoEditForm = () => {
  return (
    <FormContainer>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </FormContainer>
  );
};

const FormContainer = styled(Form)`
  padding: 20px;
  margin-botton: 20px;
`;

export default InfoEditForm;
