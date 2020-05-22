import { all, fork, takeLatest, call, put, take } from "redux-saga/effects";
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
} from "../reducers/user";

const HELLO_SAGA = "HELLO_SAGA";

function loginAPI() {
  // 서버에 요청을 보내는 부분
}

function* login() {
  try {
    yield fork(logger); // looger는 내 기록을 로깅하는 함수, 10초가 걸린다고 가정
    // 응답을 받아올 때까지 기다린다는 의미로 call사용
    yield call(loginAPI);
    yield put({
      // put은 dispatch와 동일
      type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  // 로그인 액션이 실행되면 login 함수를 실행
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchHello() {
  console.log("before saga");
  while (true) {
    yield take(HELLO_SAGA);
    console.log("hello saga");
  }
}

export default function* userSaga() {
  yield all([fork(watchLogin), fork(watchHello)]);
}
