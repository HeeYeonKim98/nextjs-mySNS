import React from "react";
import styled from "styled-components";

import AppHead from "../components/AppHead";
import SignupForm from "../components/SignupForm";

const Signup = () => (
  <>
    <AppHead headtitle="회원가입 | my SNS" />
    <Container>
      <SignupForm />
    </Container>
  </>
);

const Container = styled.div`
  padding: 10px;
  margin: 10px;
`;

export default Signup;
