import AppHead from "../components/AppHead";
import React from "react";
import SignupForm from "../components/SignupForm";
import styled from "styled-components";

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
