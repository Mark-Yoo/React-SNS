import React from "react";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

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
