import React from "react";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import SigninForm from "./SigninForm";

const dummy = {
  nickname: "Mark",
  post: [],
  following: [],
  follower: [],
  isLoggedIn: false,
};

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>React SNS</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link href="/about">
            <a>About</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      <Row gutter={1}>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ? <UserProfile userInfo={dummy} /> : <SigninForm />}
        </Col>
        <Col xs={12} md={12}>
          {children}
        </Col>
        <Col xs={12} md={6}>
          세번째
        </Col>
      </Row>
    </div>
  );
};

export default AppLayout;
