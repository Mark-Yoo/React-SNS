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
  const [idError, setIdError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [pwckError, setPwckError] = useState(false);
  const [termError, setTermError] = useState(false);
  const idRegExp = new RegExp(/^[a-zA-Z0-9+]{5,13}$/g);
  const pwRegExp = new RegExp(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/);

  // 아이디
  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onCheckId = () => {
    idRegExp.test(id) ? setIdError(false) : setIdError(true);
  }

  // 닉네임
  const onChangeNick = (e) => {
    setNick(e.target.value);
  };

  // 패스워드
  const onChangePw = (e) => {
    setPassword(e.target.value);
  };

  const onCheckPw = () => {
    pwRegExp.test(password) ? setPwError(false) : setPwError(true);
  }

  // 패스워드 체크
  const onChangePwck = (e) => {
    setPasswordCheck(e.target.value);
  };

  const onCheckpwck = () => {
    passwordCheck === password ? setPwckError(false) : setPwckError(true);
  }

  // 약관 체크
  const onChangeTerm = (e) => {
    setTerm(e.target.checked);
  };

  // 폼 제출
  const onSubmit = (e) => {
    e.preventDefault();
    term ? setTermError(false) : setTermError(true);
    if (!idError && !pwError && !pwckError && !termError) return;
    console.log('success');
  };

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
            <Input name ="user-id" required value={id} onChange={onChangeId} onBlur={onCheckId} placeholder="아이디는 영문 대소문자와 숫자의 조합 5~13글자로 만들어주세요."/>
            {idError && <div style={{color: 'red'}}>아이디의 형식이 맞지 않습니다.</div>}
          </div>
          <div>
            <label htmlFor="user-nickname">닉네임</label>
            <br />
            <Input name ="user-nickname" required value={nick} onChange={onChangeNick} placeholder="닉네임은 영문 대소문자, 한글, 숫자의 조합으로 만들어주세요."/>
          </div>
          <div>
            <label htmlFor="user-password">패스워드</label>
            <br />
            <Input name ="user-password" type="password" required value={password} onChange={onChangePw} onBlur={onCheckPw} placeholder="8~16자리의 영문 대소문자, 특수문자, 숫자의 조합으로 만들어주세요" />
            { pwError && <div style={{color: 'red'}}>비밀번호가 형식에 맞지 않습니다.</div>}
          </div>
          <div>
            <label htmlFor="user-password-ck">패스워드 확인</label>
            <br />
            <Input name ="user-password-ck" type="password" required value={passwordCheck} onChange={onChangePwck} onBlur={onCheckpwck} placeholder="비밀번호를 다시 입력하여 주세요" />
            {pwckError && <div style={{color: 'red'}}>비밀번호가 일치하지 않습니다.</div>}
          </div>
          <div>
            <Checkbox name="user-term" onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
            {termError && <div style={{color: 'red'}}>약관에 동의하여주세요</div>}
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