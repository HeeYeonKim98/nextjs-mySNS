import "antd/dist/antd.css";

import { Input, Menu } from "antd";

import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Navigation = () => (
  <div>
    <Menu mode="horizontal" triggerSubMenuAction="click">
      <Menu.Item>
        <Link href="/">
          <a>홈</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/profile">
          <a>프로필</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <SearchStyle enterButton />
      </Menu.Item>
    </Menu>
  </div>
);

const SearchStyle = styled(Input.Search)`
  vertical-align: middle;
`;

export default Navigation;
