import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { loginDone } = useSelector((state) => state.User);
  const { mainPosts } = useSelector((state) => state.Post);

  return (
    <>
      {loginDone && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
};

export default Home;
