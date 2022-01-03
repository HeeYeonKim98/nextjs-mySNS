/* eslint-disable jsx-a11y/alt-text */
import { Card, Carousel } from "antd";

import React from "react";
import styled from "styled-components";

const PostImage = ({ image }) => (
  <CardContainer>
    <Card>
      {image.length === 1 && (
        <div>
          <img src={image[0].src} width="40%" />
        </div>
      )}
      {image.length > 1 && (
        <Carousel effect="fade">
          {image.map((value) => (
            <div key={value.src}>
              <img src={value.src} width="40%" />
            </div>
          ))}
        </Carousel>
      )}
    </Card>
  </CardContainer>
);

const CardContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default PostImage;
