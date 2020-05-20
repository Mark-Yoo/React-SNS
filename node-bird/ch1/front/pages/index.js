import React, { useEffect } from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { useDispatch } from "react-redux";
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
      {dummy.isLoggedIn && <PostForm info={dummy} />}
      {dummy.mainPost.map((c) => (
        <PostCard info={c} />
      ))}
    </div>
  );
};

export default Home;
