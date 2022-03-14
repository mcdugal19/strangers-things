import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import deleteTrash from "./images/deleteTrash.png";
import editPencil from "./images/editPencil.png";
import sendMessage from "./images/sendMessage.png";
import { fetchUserData } from "../api/ajaxHelpers";
// import {posts, setPosts, isLoggedIn, token, username} from "";
// import {Search} from "./Search.jsx";

const Profile = ({
  userPosts,
  setUserPosts,
  isLoggedIn,
  token,
  username,
  userMessages,
  setUserMessages,
  setToken,
}) => {
  useEffect(() => {
    const getUserData = async () => {
      if (isLoggedIn) {
        const response = await fetchUserData(token);
        console.log(response);
        setUserPosts(response.data.posts);
        setUserMessages(response.data.messages);
      } else {
        console.log("didn't work");
      }
    };
    getUserData();
  }, []);

  return (
    <div className="container">
      <div className="profile-page">
        <div className="post-page">
          {userPosts.length === 0 ? (
            <h2>No Posts Yet</h2>
          ) : (
            userPosts.map((post) => {
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
            })
          )}
        </div>
        <div className="newpost-page">
          {userMessages.length === 0 ? (
            <h2>No Messages Yet</h2>
          ) : (
            userMessages.map((message) => {
              return (
                <div className="message-card" key={message._id}>
                  <h3>Post: {message.post.title}</h3>
                  <h4>From: {message.fromUser.username}</h4>
                  <br />
                  <p>{message.content}</p>
                  <br />
                  <form
                    action=""
                    onSubmit={(e) => {
                      e.preventDefault();
                      // sendMessage(messageObj)
                    }}
                  >
                    <input type="text" />
                    <button type="submit">Reply</button>
                  </form>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

// function convertTime(){
//     let {post.createdAt} = APItime;
//     let displayTime =
// }
