import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import deleteTrash from "./images/deleteTrash.png";
import editPencil from "./images/editPencil.png";
import sendMessage from "./images/sendMessage.png";
import { fetchUserPosts } from "../api/ajaxHelpers";
// import {posts, setPosts, isLoggedIn, token, username} from "";
// import {Search} from "./Search.jsx";

const Profile = ({ userPosts, setUserPosts, isLoggedIn, token, username }) => {
  useEffect(() => {
    const getUserPosts = async () => {
      const userPostsArray = await fetchUserPosts();
      setUserPosts(userPostsArray);
    };
    getUserPosts();
  }, [userPosts]);
  return (
      <div className="profile-page">
        {userPosts.map((post) => {
          return (
            <div className="post-card" key={post._id}>
              <h3 className="post-title">{post.title}</h3>
              <h4 className="post-username">
                Posted by: {post.author.username}
              </h4>
              <br />
              <h5 className="post-price">Price: {post.price}</h5>
              <br />
              <p className="post-content">{post.description}</p>
              <br />
              <span className="post-time">
                <p className="post-created">Created On: {post.createdAt}</p>
                {post.updatedAt !== post.createdAt ? (
                  <p className="post-updated">
                    Last Updated On: {post.updatedAt}
                  </p>
                ) : null}
              </span>
              <br />
              <button className="post-button" id="message">
                {<img src={sendMessage} alt="message icon" />} Message
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

export default Profile;

// function convertTime(){
//     let {post.createdAt} = APItime;
//     let displayTime =
// }
