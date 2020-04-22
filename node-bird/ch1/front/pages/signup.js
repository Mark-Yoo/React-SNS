import React, { useState } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import AppLayout from '../components/AppLayout';

const Signup = () => {
  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangeNick = (e) => {
    setNick(e.target.value);
  };
  const onChangePw = (e) => {
    setPassword(e.target.value);
  };
  const onChangePwck = (e) => {
    setPasswordCheck(e.target.value);
  };
  const onChangeTerm = (e) => {
    setTerm(e.target.value);
  };
  const onSubmit = () => {};

  return(
    <>
      <Head>
        <title>ReactSNS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.1.4/antd.css" />
      </Head>
      <AppLayout>
          <Form onSubmit={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-id">아이디</label>
            <br />
            <Input name ="user-id" required value={id}onChange={onChangeId} />
          </div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <br />
            <Input name ="user-nickname" required value={nick} onChange={onChangeNick} />
          </div>
          <div>
            <label htmlFor="user-password">패스워드</label>
            <br />
            <Input name ="user-password" type="password" required value={password} onChange={onChangePw} />
          </div>
          <div>
            <label htmlFor="user-password-ck">패스워드</label>
            <br />
            <Input name ="user-password-ck" type="password" required value={passwordCheck} onChange={onChangePwck} />
          </div>
          <div>
            <Checkbox name="user-term" value={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
          </div>
          <div>
            <Button type="primary" htmlType="submit">가입하기</Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
}

export default Signup;