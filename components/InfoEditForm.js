import React from "react";
import styled from "styled-components";
import { Form, Input } from "antd";

const InfoEditForm = () => {
  return (
    <FormContainer>
      <Input.Search addonBefore="이름" enterButton="수정" />
    </FormContainer>
  );
};

const FormContainer = styled(Form)`
  padding: 20px;
  margin-bottom: 20px;
`;

export default InfoEditForm;
