import React, { useEffect } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN } from "../reducers/user";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPost: [
    {
      User: {
        id: 1,
        nickname: "Mark",
      },
      content: "처음 만드는 SNS",
    },
  ],
};
const Home = () => {
  // useEffect에 dependency가 존재하지 않는다면 componentDidMount와 같다고 볼 수 있다.
  const dispatch = useDispatch();
  // useSelector를 사용하면 받아온 전체 상태들 중에서 원하는 상태를 가진 reducer만을 골라낼 수 있다.
  const { isLoggedIn, user } = useSelector((state) => state.user);
  console.log(user);
  console.log(isLoggedIn);
  useEffect(() => {
    dispatch({
      type: LOG_IN,
      data: {
        nickname: "Mark",
      },
    });
  }, []);
  return (
    <div>
      {user ? (
        <div>로그인했습니다.{user.nickname}</div>
      ) : (
        <div>로그아웃 했습니다.</div>
      )}
      {dummy.isLoggedIn && <PostForm info={dummy} />}
      {dummy.mainPost.map((c) => (
        <PostCard info={c} />
      ))}
    </div>
  );
};

export default Home;
