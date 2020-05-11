import React from "react";
import Link from "next/link";
import { Menu, Input, Button, Row, Col, Card, Avatar, Form } from "antd";

const dummy = {
  nickname: "Mark",
  Post: [],
  following: [],
  follower: [],
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
      <Link href="/signup">
        <Button>
          <a>회원가입</a>
        </Button>
      </Link>
      <Row>
        <Col xs={24} md={6}>
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
          ></Card>
          <Card.Meta
            avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
            title={dummy.nickname}
          ></Card.Meta>
          <Form>
            <div>
              <label htmlFor="user-id">아이디</label>
              <br />
              <Input name="user-id" required></Input>
            </div>
            <div>
              <label htmlFor="user-password" required>
                비밀번호
              </label>
              <br />
              <Input name="user-password" type="password"></Input>
            </div>
            <div>
              <Button type="primary" htmlFor="submit" loading={false}>
                로그인
              </Button>
              <Link href="/signup">
                <a>
                  <Button>회원가입</Button>
                </a>
              </Link>
            </div>
          </Form>
        </Col>
        <Col xs={12} md={12}>
          두번째
        </Col>
        <Col xs={12} md={6}>
          세번째
        </Col>
      </Row>
      {children}
    </div>
  );
};

export default AppLayout;
