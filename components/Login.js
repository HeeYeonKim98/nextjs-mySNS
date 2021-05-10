import React, { useState } from "react";
import { Row, Col } from "antd";

import LoginForm from "./LoginForm";
import Profile from "./Profile";

import "antd/dist/antd.css";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Row gutter={8}>
      <Col xs={24} md={7}>
        {isLoggedIn ? (
          <Profile setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
      </Col>
      <Col xs={24} md={10} />
      <Col xs={24} md={7} />
    </Row>
  );
};

export default Login;
