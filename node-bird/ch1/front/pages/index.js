import React from "react";
import { Form, Input, Button, Card, Icon, Avatar } from "antd";
import PostForm from "../components/PostForm";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPost: [
    {
      User: {
        id: 1,
        nickname: "Mark",
      },
      content: "처음 만드는 SNS",
    },
  ],
};
const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && <PostForm dummy={dummy} />}
      {dummy.mainPost.map((c) => {
        return (
          <Card
            key={+c.createAt}
            cover={c.img && <img alt="example" src={c.img} />}
            actions={[
              <Icon type="retweet" key="retweet" />,
              <Icon type="heart" key="heart" />,
              <Icon type="message" key="message" />,
              <Icon type="ellipsis" key="ellipsis" />,
            ]}
            extra={<Button>팔로우</Button>}
          >
            <Card.Meta
              avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
              title={c.User.nickname}
              description={c.content}
            ></Card.Meta>
          </Card>
        );
      })}
    </div>
  );
};

export default Home;
