import React, { useEffect } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN } from "../reducers/user";

const Home = () => {
  // useEffect에 dependency가 존재하지 않는다면 componentDidMount와 같다고 볼 수 있다.
  const dispatch = useDispatch();
  // useSelector를 사용하면 받아온 전체 상태들 중에서 원하는 상태를 가진 reducer만을 골라낼 수 있다.
  // useSelector를 이용해 잘게 잘라낸 상태를 여러번 가져오게 하는 것이 불필요한 리렌더링을 막을 수 있으므로 useSelector는 많이 사용하는 것이 성능에 도움이 된다. (너무 코드가 커지는 것도 좋지 않으니 성능이 어느정도 최적화 되는 측면에 맞춰서 쓰는 것이 좋다.)
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <div>
      {user ? (
        <div>로그인했습니다.{user.nickname}</div>
      ) : (
        <div>로그아웃 했습니다.</div>
      )}
      {isLoggedIn && <PostForm info={mainPosts} />}
      {mainPosts.map((c) => (
        <PostCard info={c} post={c} />
      ))}
    </div>
  );
};

export default Home;
