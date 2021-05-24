import React from "react";
import { useSelector } from "react-redux";

import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.User);
  const { mainPosts } = useSelector((state) => state.Post);

  return (
    <>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </>
  );
};

export default Home;
