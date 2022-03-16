import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import deleteTrash from "./images/deleteTrash.png";
import editPencil from "./images/editPencil.png";
import { fetchUserData } from "../api/ajaxHelpers";
import Messages from "./Messages";
// import {posts, setPosts, isLoggedIn, token, username} from "";
// import {Search} from "./Search.jsx";

const Profile = ({
  userPosts,
  setUserPosts,
  isLoggedIn,
  token,
  username,
  setUsername,
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
        setUsername(response.data.username);
        console.log(response.data.username, "inside use effect");
      } else {
        console.log("didn't work");
      }
    };
    getUserData();
  }, []);

  return (
    <div className="container">
      {!isLoggedIn ? (
        <div className="post-page">
          Please log in/register to create posts or send messages.
        </div>
      ) : (
        <div className="profile-page">
          {/* This section is used to display the User's Posts */}
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
                      <p className="post-created">
                        Created On: {post.createdAt}
                      </p>
                      {post.updatedAt !== post.createdAt ? (
                        <p className="post-updated">
                          Last Updated On: {post.updatedAt}
                        </p>
                      ) : null}
                    </span>
                    <br />
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

              {/* This section is used to display Messages sent to the user */}
          <div className="newpost-page">
            {userMessages.length === 0 ? (
              <h2>No Messages Yet</h2>
            ) : (
              userMessages.map((message, i) => {
                return (
                  <div className="message-card" key={i}>
                    <h3>Post: {message.post.title}</h3>
                    <h4>From: {message.fromUser.username}</h4>
                    <br />
                    <p>{message.content}</p>
                    <br /> 
                    {userMessages[i].fromUser.username === username ? null : (
                      <Messages 
                      token={token}
                      message={message}
                      />
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

// function convertTime(){
//     let {post.createdAt} = APItime;
//     let displayTime =
// }
