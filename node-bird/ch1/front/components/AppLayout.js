import React from "react";
import Link from "next/link";
import { Menu, Input, Row, Col, Card, Avatar } from "antd";
import SigninForm from "./SigninForm";

const dummy = {
  nickname: "Mark",
  Post: [],
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
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ? (
            <Card
              actions={[
                <div key="twit">
                  트윗
                  <br />
                  {dummy.Post.length}
                </div>,
                <div key="following">
                  팔로잉
                  <br />
                  {dummy.Post.length}
                </div>,
                <div key="follower">
                  팔로워
                  <br />
                  {dummy.Post.length}
                </div>,
              ]}
            >
              <Card.Meta
                avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                title={dummy.nickname}
              ></Card.Meta>
            </Card>
          ) : (
            <SigninForm />
          )}
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
