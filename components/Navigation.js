import React from "react";
import Link from "next/link";
import { Menu, Input } from "antd";
import styled from "styled-components";

import "antd/dist/antd.css";

const Navigation = () => {
  return (
    <div>
      <Menu mode="horizontal">
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
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

const SearchStyle = styled(Input.Search)`
  vertical-align: middle;
`;

export default Navigation;
