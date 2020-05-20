import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import withRedux from "next-redux-wrapper";
import AppLayout from "../components/AppLayout";
import { createStore, compose, applyMiddleware } from "redux";
// provider가 중앙통제를 가능하게 해준다.
import { Provider } from "react-redux";
import reducer from "../reducers";

// Component는 next에서 전달해주는 props로 각 컴포넌트들을 전달한다.
// Component는 JSX 문법으로 사용해야 한다.
// _app.js는 기본적인 레이아웃으로 인식한다.
// prop-types를 이용해 props를 검증해주는 기능을 react가 지원한다.
const NodeBird = ({ Component, store }) => {
  console.log(Component);
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

// node 타입은 렌더링이 가능한 모든 것을 포함한다.
NodeBird.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object,
};

export default withRedux((initialState, options) => {
  // middleware를 사용하면 redux에 기능을 추가해줄 수 있다. 예. redux-saga
  // 과정의 변조 및 추가를 해줄 수 있다.
  const middlewares = [];
  // compose로 middlewares들을 합성하여 enhancer로 만든다.
  const enhancer = compose(
    applyMiddleware(...middlewares),
    // next에서 제공해주는 options 내에는 지금 상태를 받아오는 곳이 server인지 아닌지 알 수 있는 isServer가 내장되어있다.
    !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  );
  // state와 reducer가 합쳐진 것이 store
  const store = createStore(reducer, initialState, enhancer);
  // 이 곳에 store 커스터마이징
  return store;
})(NodeBird);
