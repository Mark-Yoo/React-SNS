import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";

// Component는 next에서 전달해주는 props로 각 컴포넌트들을 전달한다.
// Component는 JSX 문법으로 사용해야 한다.
// _app.js는 기본적인 레이아웃으로 인식한다.
const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>ReactSNS</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.1.4/antd.css"
        />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

export default NodeBird;
