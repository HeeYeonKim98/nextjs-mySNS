import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";

import LoginForm from "./LoginForm";
import Profile from "./Profile";

import "antd/dist/antd.css";

const AppLayout = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.User);

  return (
    <Row gutter={8}>
      <Col xs={24} md={6}>
        {isLoggedIn ? <Profile /> : <LoginForm />}
      </Col>
      <Col xs={24} md={12}>
        {children}
      </Col>
      <Col xs={24} md={6} style={{ textAlign: "center" }}>
        <a
          href="https://github.com/HeeYeonKim98"
          target="_blank"
          rel="noreferrer noopener"
        >
          made by heeyeon.K
        </a>
      </Col>
    </Row>
  );
};

export default AppLayout;
