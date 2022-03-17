import React, { useEffect } from "react";
import { fetchUserData } from "../api/ajaxHelpers";
import Messages from "./Messages";
import SingleProfilePost from "./SingleProfilePost";

const Profile = ({
  userPosts,
  setUserPosts,
  isLoggedIn,
  token,
  username,
  setUsername,
  userMessages,
  setUserMessages,
}) => {
  // The below useEffect is responsible for retrieving and filtering the user's posts and messages
  useEffect(() => {
    const getUserData = async () => {
      try {
        if (isLoggedIn) {
          const response = await fetchUserData(token);
          setUserPosts(response.data.posts);
          setUserMessages(response.data.messages);
          setUsername(response.data.username);
        }
      } catch (err) {
        console.error("There was an issue retrieving user information", err);
      }
    };
    getUserData();
  }, []);

  // The Profile page will only display if the user is logged in
  // The below sections display both the user's posts and the user's messages
  return (
    <>
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
              userPosts.map((post, i) => {
                return (
                  <SingleProfilePost
                    key={`userPosts[${i}]`}
                    post={post}
                    token={token}
                    userPosts={userPosts}
                    setUserPosts={setUserPosts}
                  />
                );
              })
            )}
          </div>

          {/* This section is used to display Messages sent to the user */}
          <div className="message-page">
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
                    {/* This section is to open the Reply form to messages directed to the user */}
                    {userMessages[i].fromUser.username === username ? null : (
                      <Messages token={token} message={message} />
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
