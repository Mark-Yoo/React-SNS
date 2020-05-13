import React, { useState, useCallback } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useInput } from "../pages/signup";

function SigninForm() {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      console.log({
        id,
        password,
      });
    },
    [id, password]
  );

  return (
    <>
      <Form onSubmit={onSubmitForm} style={{ padding: "10px" }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input
            name="user-id"
            value={id}
            onChange={onChangeId}
            required
          ></Input>
        </div>
        <div>
          <label htmlFor="user-password" required>
            비밀번호
          </label>
          <br />
          <Input
            name="user-password"
            value={password}
            onChange={onChangePassword}
            type="password"
          ></Input>
        </div>
        <div style={{ paddingTop: "20px" }}>
          <Button type="primary" htmlFor="submit" loading={false}>
            로그인
          </Button>
          <Link href="/signup">
            <a>
              <Button style={{ float: "right" }}>회원가입</Button>
            </a>
          </Link>
        </div>
      </Form>
    </>
  );
}

export default SigninForm;
