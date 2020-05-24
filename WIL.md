## 진행 중 배운점
- redux-saga를 처음 사용하면서 자바스크립트와 약간 다른 문법으로 적응하는데에 시간이 좀 걸림
> redux-saga는 redux에서 즉시 실행되는 action 사이의 틈을 감지할 수 있다. 때문에 이 액션이 실행되는지 기다리고 있다가 비동기 동작이 완료되었을 때에 이 동작이 성공했는지 실패했는지를 알 수 있다. 

> createSagaMiddleware를 다른 파일에서 만들어 import해 올 경우 한 번 밖에 사용할 수 없어 에러가 나므로 _app.js 파일의 store 내부에서 호출해서 지속적으로 사용 가능하게 만들어야 한다.

제너레이터(*) 를 사용하면 함수를 중간에 멈추는 것이 가능하다.

```
// 제너레이션 객체를 생성한다.
function* generator() {
  console.log(1);
}

const gen = generator();

gen.next();

// yield를 사용하면 제너레이터를 코드의 중간에 중단점을 만들어줄 수 있다. 이 때 제네레이션 객체의 done 값은 false이다. 

function* generator() {
  yield 1;
  yield 2;
  yield 3;
  // 아래의 코드는 위의 코드와 같은 동작을 한다.
  yield* [1, 2, 3];
}
```

> yield가 사용되었던 이유는 async/await가 표준으로 인정받기 이전에 비동기를 동기처럼 동작하기 위해서 사용된 코드 중 하나이다. yield가 await와 비슷한 동작을 한다. 다만 현재는 async/await가 나오면서 많이 사용되지 않는 코드가 되었지만 yield는 코드를 중간에 멈추고 원하는 순간에 다시 실행 할 수 있으므로 비동기를 자유자재로 컨트롤 하는 것이 가능하다. 때문에 redux-saga는 제너레이터와 yield를 사용한다.

### 제너레이트 문법
```
// take는 특정 액션이 dispatch되면 제너레이터를 next한다. (take 자체에 next가 내장되어 있으므로 따로 사용하지 않아도 된다.)
function* helloSaga() {
  yield take(HELLO_SAGA);
}
```
* 참고: redux-saga는 redux devtools에서 액션을 dispatch 할 수 없으므로 컴포넌트 내에서 직접 할 것

```
function* helloSaga() {
  console.log('before saga works');
  const count = 0;
  while (true) {
    yield take(repeatedFunction);
    console.log('after saga works);
    count++;
    console.log(count);
  }
}
```
* 위와 같은 코드를 사용하면 중단점을 기준으로 무한히 yield 다음의 코드를 실행할 수 있다. 이는 while문조차도 yield의 중단점에서 멈추기 때문.

- redux-saga에서 동작하지 않는다고해도 reducer는 그대로 동작한다. 이 둘은 서로 독립적으로 존재하기 때문이다.

```
// while(true)를 사용하지 않고 takeEvery 제너레이트 함수를 이용해서 특정 동작을 실행할 수 있다.

function* Hello() {
  yield takeEvery(SAY_HELLO, function*() {
    console.log(1);
  })
}

// takeLatest는 while(true)와 조금 다르다. 겉으로 보기에는 동작이 같아보이나 예를 들어 비동기 (delay와 같은) 동작이 추가된다면 제일 마지막으로 dispatch된 action만 받겠다는 의미가 되므로 무의미한 동일한 요청을 막고 제일 마지막으로 받은 action만을 실행하게 된다.
예) 로그인 버튼을 여러번 누르는 경우
```

- call은 동기 호출, fork는 비동기 호출

### Redux-saga pattern
- 보통 서버에 요청을 보내고 결과를 받아야 하는 경우에는 saga를 사용한다.
- 만약 여러번의 action이 dispatch 되었을 때에 불필요하게 서버에 요청을 여러번 하게 되는 상황이라면 redux-saga에서 미리 한 번만 받을 수 있게 막는 것이 좋다.

### 클린코드(clean code)
- 클린 코드는 null을 반환하지 않는것이 좋다
