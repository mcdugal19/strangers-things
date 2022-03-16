import React, { useState, useEffect } from "react";
import { fetchPosts } from "../api/ajaxHelpers";
import { SinglePost } from "./";

const Posts = ({ posts, setPosts, isLoggedIn, token, username }) => {


  useEffect(() => {
    const getPosts = async () => {
      const postsArray = await fetchPosts();
      setPosts(postsArray);
    };
    getPosts();
  }, []);


  return (
    <div className="post-page">
      {posts.map((post, i) => {
        return (
          <SinglePost
            key={i}
            post={post}
            token={token}
            isLoggedin={isLoggedIn}
            username={username}
          />
        );
      })}
    </div>
  );
};

export default Posts;
