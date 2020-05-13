import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import AppLayout from "../components/AppLayout";

// Component는 next에서 전달해주는 props로 각 컴포넌트들을 전달한다.
// Component는 JSX 문법으로 사용해야 한다.
// _app.js는 기본적인 레이아웃으로 인식한다.
// prop-types를 이용해 props를 검증해주는 기능을 react가 지원한다.
const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <title>ReactSNS</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

// node 타입은 렌더링이 가능한 모든 것을 포함한다.
NodeBird.propTypes = {
  Component: PropTypes.elementType,
};

export default NodeBird;
