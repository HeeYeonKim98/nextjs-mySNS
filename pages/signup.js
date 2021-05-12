import React from "react";

import AppHead from "../components/AppHead";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <>
      <AppHead headtitle="회원가입 | my SNS" />
      <SignupForm />
    </>
  );
};

export default Signup;
