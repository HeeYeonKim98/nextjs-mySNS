import React from "react";
import styled from "styled-components";
import { Card, List, Button } from "antd";
import { StopOutlined } from "@ant-design/icons";

const FollowList = ({ header, data }) => {
  return (
    <ListContainer
      bordered
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={header}
      dataSource={data}
      loadMore={
        <ButtonStyle>
          <Button>더 보기</Button>
        </ButtonStyle>
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
};

const ListContainer = styled(List)`
  margin-bottom: 30px;
  margin: 20px;
`;

const ButtonStyle = styled.div`
  text-align: center;
  margin: 15px 0;
`;

export default FollowList;
