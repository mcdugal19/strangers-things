import React, { useState, useEffect } from "react";
import deleteTrash from "./images/deleteTrash.png";
import editPencil from "./images/editPencil.png";
import sendMessage from "./images/sendMessage.png";
import { fetchPosts } from "../api/ajaxHelpers";

const Posts = ({ posts, setPosts, isLoggedIn, token, username }) => {
  useEffect(() => {
    const getPosts = async () => {
      const postsArray = await fetchPosts();
      setPosts(postsArray);
    };
    getPosts();
  }, [posts]);

  // function convertTime(){
  //     let {post.createdAt} = APItime;
  //     let displayTime =
  // }

  return (
    <div className="post-page">
      {posts.map((post) => {
        return (
          <div className="post-card" key={post._id}>
            <h3 className="post-title">{post.title}</h3>
            <h4 className="post-username">Posted by: {post.author.username}</h4>
            <h5 className="post-price">Price: {post.price}</h5>
            <p className="post-content">{post.description}</p>
            <br/>
            <span className="post-time">
              <p className="post-created">Created On: {post.createdAt}</p>
              {post.updatedAt !== post.createdAt ? (
                <p className="post-updated">
                  Last Updated On: {post.updatedAt}
                </p>
              ) : null}
            </span>
            <button className="post-button" id="message">
              {<img src={sendMessage} alt="message icon"/>} Message
            </button>
            <button className="post-button" id="edit">
              {<img src={editPencil} alt="pencil icon" />}Edit
            </button>
            <button className="post-button" id="delete">
              {<img src={deleteTrash} alt="trash icon" />}Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
