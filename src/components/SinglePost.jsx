import React, { useState } from "react";
import deleteTrash from "./images/deleteTrash.png";
import editPencil from "./images/editPencil.png";
import mailIcon from "./images/mailIcon.png";
import { sendMessage, deletePost } from "../api/ajaxHelpers";

const SinglePost = ({ post, token }) => {
  const [message, setMessage] = useState("");
  const [clickedMessage, setClickedMessage] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  
  // const [clickedDelete, setClickedDelete] = useState(false);
  const [postDeleted, setPostDeleted] = useState(false);

  return (
    <div className="post-card">
      <h3 className="post-title">{post.title}</h3>
      <h4 className="post-username">Posted by: {post.author.username}</h4>
      <h5 className="post-location">Location: {post.location}</h5>
      <h6 className="post-deliver">
        Will deliver? {post.willDeliver ? "Yes" : "No"}
      </h6>

      <br />
      <h5 className="post-price">Price: {post.price}</h5>
      <br />
      <p className="post-content">{post.description}</p>
      <br />
      <span className="post-time">
        <p className="post-created">Created On: {post.createdAt}</p>
        {post.updatedAt !== post.createdAt ? (
          <p className="post-updated">Last Updated On: {post.updatedAt}</p>
        ) : null}
      </span>
      <br />
      {/* Button Display */}
      <button
        className="post-button"
        id="message"
        onClick={(e) => {
          e.preventDefault();
          setClickedMessage(true);
        }}
      >
        {<img src={mailIcon} alt="message icon" />} Message
      </button>
      <button className="post-button" id="edit">
        {<img src={editPencil} alt="pencil icon" />}Edit
      </button>
      <button className="post-button" id="delete">
        {<img src={deleteTrash} alt="trash icon" onClick={(e) => {
          e.preventDefault();
          setPostDeleted(true);
          deletePost(post._id, token);
        }}/>}Delete
      </button>
    {/* When an authenticated user clicks the message button the form below pops out to enable messaging */}
      <div className="message-form">
        {clickedMessage ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(message, post._id, token);
              setClickedMessage(false);
              setMessageSent(true);
            }}
          >
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <button type="submit">Send</button>
          </form>
        ) : null}
      </div>
      <div className="message-sent">{messageSent ? "Message Sent" : null}</div>
      <div className="post-deleted">{postDeleted ? "Post Deleted" : null}</div>
    </div>
  );
};

export default SinglePost;
