# React-SNS

목적: React를 활용하여 SNS의 기본 기능 구축해보기

## 사용한 기술 스택 및 라이브러리

- Javascript(ES6)
- CSS3
- React
- Next.js
- Redux-react
- Redux-saga
- Prop-types
- Next-redux-wrapper
- React-DOM
- eslint
- 디자인(antd)

------

## 진행 중 배운점
- redux-saga를 처음 사용하면서 자바스크립트와 약간 다른 문법으로 적응하는데에 시간이 좀 걸림
> redux-saga는 redux에서 즉시 실행되는 action 사이의 틈을 감지할 수 있다. 때문에 이 액션이 실행되는지 기다리고 있다가 비동기 동작이 완료되었을 때에 이 동작이 성공했는지 실패했는지를 알 수 있다. 

> createSagaMiddleware를 다른 파일에서 만들어 import해 올 경우 한 번 밖에 사용할 수 없어 에러가 나므로 _app.js 파일의 store 내부에서 호출해서 지속적으로 사용 가능하게 만들어야 한다.
------


## 진행 중 만난 오류

### 1. Npm run dev 오류

- 전날까지 잘 실행되던 npm run dev에서 아래와 같은 에러코드가 발생
- next 관련 코드를 건드리지 않았으나 git에 원인을 알 수 없는 에러로 보고되어 있었으며, 어떤 사람은 webpack과 @babel/core를 업데이트 하여 해결되었다는 글이 있었으나 본인의 경우에는 해결되지 않음
- 결국 node_module 폴더와 package-lock.json 파일을 삭제 후 npm i로 다시 dependency에 등록된 패키지들을 다시 설치하고 해결됨.

```
./node_modules/next/dist/client/next-dev.js 36:6
Module parse failed: Unexpected token (36:6)
You may need an appropriate loader to handle this file type.
| 
| 
> import('./noop'); // Support EventSource on Internet Explorer 11
```

Next 9버전에서 제대로 동작하지 않는 코드를 발견 8버전으로 다운그레이드 후 사용중
향후 다시 9버전 코드로 수정할 예정