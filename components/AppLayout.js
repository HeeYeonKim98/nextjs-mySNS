import "antd/dist/antd.css";

import { Col, Row } from "antd";

import LoginForm from "./LoginForm";
import Profile from "./Profile";
import React from "react";
import { useSelector } from "react-redux";

const AppLayout = ({ children }) => {
  const { loginDone } = useSelector((state) => state.User);

  return (
    <Row gutter={8}>
      <Col xs={24} md={6}>
        {loginDone ? <Profile /> : <LoginForm />}
      </Col>
      <Col xs={24} md={12}>
        {children}
      </Col>
      <Col xs={24} md={6} style={{ textAlign: "center", padding: 10 }}>
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
