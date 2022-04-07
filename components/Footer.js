import React from "react";
import styled from "styled-components";

// TODO: css 안맞는 부분 수정

const Footer = () => <Container> © made by heeyeon. </Container>;

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
`;

export default Footer;
