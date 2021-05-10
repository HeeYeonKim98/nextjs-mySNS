import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Menu, Input } from "antd";

import "antd/dist/antd.css";

const Navigation = () => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>HOME</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchStyle enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>HOME</a>
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
