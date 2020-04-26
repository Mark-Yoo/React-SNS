# React-SNS

목적: React를 활용하여 SNS의 기본 기능 구축해보기





진행 중 만난 오류
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
