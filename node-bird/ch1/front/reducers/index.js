// 분리된 상태들을 모두 품고 있을 root
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

const rootReducder = combineReducers({
  user,
  post,
});

export default rootReducder;
