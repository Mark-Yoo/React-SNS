import React from "react";
import { Card, Avatar } from "antd";

const UserProfile = ({ userInfo }) => {
  return (
    <Card
      actions={[
        <div key="twit">
          트윗
          <br />
          {userInfo.post.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {userInfo.post.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {userInfo.post.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
        title={userInfo.nickname}
      ></Card.Meta>
    </Card>
  );
};

export default UserProfile;
