import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button } from 'antd';

const AppLayout = ({ children }) => {
  return(
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>React SNS</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle'}}/>
        </Menu.Item>
      </Menu>
      <Button><Link href="/signup"><a>회원가입</a></Link></Button>
      {children}
    </div>
  )
}

export default AppLayout;