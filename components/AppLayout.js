import React, { useState } from "react";
import { Row, Col } from "antd";

import LoginForm from "./LoginForm";
import Profile from "./Profile";

import "antd/dist/antd.css";

const Login = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Row gutter={8}>
      <Col xs={24} md={6}>
        {isLoggedIn ? (
          <Profile setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
      </Col>
      <Col xs={24} md={12}>
        {children}
      </Col>
      <Col xs={24} md={6} style={{ textAlign: "center" }}>
        <a href="https://github.com/HeeYeonKim98" target="_blank" rel="noreferrer noopener">
          made by heeyeon.K
        </a>
      </Col>
    </Row>
  );
};

export default Login;
