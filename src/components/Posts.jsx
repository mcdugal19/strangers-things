import React, { useState, useEffect } from "react";

import { fetchPosts } from "../api/ajaxHelpers";

const Posts = ({ posts, setPosts }) => {
  useEffect(() => {
    const getPosts = async () => {
      const postsArray = await fetchPosts();
      setPosts(postsArray);
    };
    getPosts();
  }, []);

  return (
    <div className="post-page">
      {posts.map((post) => {
        return (
          <span className="post-card" key={post._id}>
            <h3 className="post-title">{post.title}</h3>
            <h4 className="post-username">from: {post.author.username}</h4>
            <p className="post-content">{post.description}</p>
            <span className="post-time">
              <p className="post-created">{post.createdAt}</p>
              {post.updatedAt ? (
                <p className="post-updated">{post.updatedAt}</p>
              ) : null}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default Posts;
