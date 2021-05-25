import React from "react";

import styled from "styled-components";

const Footer = () => {
  return <Container> © made by heeyeon. </Container>;
};

const Container = styled.div`
  margin-top: 50px;
  background-color: #e4e4e4;
  height: 150px;
  text-align: center;
  line-height: 150px;
`;

export default Footer;
