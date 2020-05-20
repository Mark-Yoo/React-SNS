import React from "react";
import { Card, Icon, Button, Avatar } from "antd";
import propTypes from "prop-types";

const PostCard = ({ info }) => {
  return (
    <Card
      key={+info.createAt}
      cover={info.Img && <img alt="example" src={info.Img} />}
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
        description={info.Content}
      ></Card.Meta>
    </Card>
  );
};

PostCard.propTypes = {
  info: propTypes.shape({
    User: propTypes.object,
    Cotnent: propTypes.string,
    Img: propTypes.string,
    createAt: propTypes.object,
  }),
};

export default PostCard;
