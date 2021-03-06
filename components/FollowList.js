import { Button, Card, List } from "antd";

import React from "react";
import { StopOutlined } from "@ant-design/icons";
import styled from "styled-components";

const FollowList = ({ header, data }) => (
  <ListContainer
    bordered
    grid={{ gutter: 4, xs: 2, md: 3 }}
    size="small"
    header={header}
    dataSource={data}
    loadMore={
      <ButtonContainer>
        <Button>더 보기</Button>
      </ButtonContainer>
    }
    renderItem={(data) => (
      <List.Item>
        <Card actions={[<StopOutlined key="stop" />]}>
          <Card.Meta description={data.name} />
        </Card>
      </List.Item>
    )}
  />
);

const ListContainer = styled(List)`
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin: 15px 0;
`;

export default FollowList;
