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

    // function convertTime(){
    //     let {post.createdAt} = APItime;
    //     let displayTime = 
    // }

  return (
    <div className="post-page">
      {posts.map((post) => {
        return (
          <span className="post-card" key={post._id}>
            <h3 className="post-title">{post.title}</h3>
            <h4 className="post-username">From: {post.author.username}</h4>
            <p className="post-content">{post.description}</p>
            <span className="post-time">
                {console.log(post.createdAt)}
              <p className="post-created">Created On:{post.createdAt}</p>
              {post.updatedAt ? (
                <p className="post-updated">Last Updated On:{post.updatedAt}</p>
              ) : null}
            </span>
            <button className="button" id="message">Message</button>
            <button className="button" id="edit">Edit</button>
            <button className="button" id="delete">Delete</button>
          </span>
        );
      })}
    </div>
  );
};

export default Posts;
