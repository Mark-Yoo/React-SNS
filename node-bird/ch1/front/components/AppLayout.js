import React from 'react';
import { Menu, Input } from 'antd';

const AppLayout = () => {
  return(
    <div>
      <Menu>
        <Menu.Item key="home">노드 버드</Menu.Item>
        <Menu.Item key="profile">프로필</Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton/>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  )
}

export default AppLayout;