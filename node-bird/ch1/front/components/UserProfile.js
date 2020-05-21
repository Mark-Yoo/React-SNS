import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // 자식 컴포넌트에 props로 전달하므로 useCallback을 사용한다.
  const onLogOut = useCallback(() => {
    dispatch(logoutAction);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          트윗
          <br />
          {user.post.length}
        </div>,
        <div key="following">
          팔로잉
          <br />
          {user.post.length}
        </div>,
        <div key="follower">
          팔로워
          <br />
          {user.post.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{user.nickname[0]}</Avatar>}
        title={user.nickname}
      ></Card.Meta>
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
