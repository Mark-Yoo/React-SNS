import React from "react";
import { Card, Icon, Button, Avatar } from "antd";

const PostCard = ({ info }) => {
  return (
    <Card
      key={+info.createAt}
      cover={info.img && <img alt="example" src={info.img} />}
      actions={[
        <Icon type="retweet" key="retweet" />,
        <Icon type="heart" key="heart" />,
        <Icon type="message" key="message" />,
        <Icon type="ellipsis" key="ellipsis" />,
      ]}
      extra={<Button>팔로우</Button>}
    >
      <Card.Meta
        avatar={<Avatar>{info.User.nickname[0]}</Avatar>}
        title={info.User.nickname}
        description={info.content}
      ></Card.Meta>
    </Card>
  );
};

export default PostCard;
