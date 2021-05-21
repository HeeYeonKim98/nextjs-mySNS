import React from "react";
import { Form, Input } from "antd";
import styled from "styled-components";

const InfoEditForm = () => {
  return (
    <FormContainer>
      <Input.Search addonBefore="이름" enterButton="수정" />
    </FormContainer>
  );
};

const FormContainer = styled(Form)`
  margin-bottom: 20px;
`;

export default InfoEditForm;
