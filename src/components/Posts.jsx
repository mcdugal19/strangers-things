import React, { useState, useEffect } from "react";
import deleteTrash from "./images/deleteTrash.png";
import editPencil from "./images/editPencil.png";
import sendMessage from "./images/sendMessage.png";
import { fetchPosts } from "../api/ajaxHelpers";

const Posts = ({ posts, setPosts, isLoggedIn, token, username }) => {
const [message, setMessage] = useState("")

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
          <div className="post-card" key={post._id}>
            <h3 className="post-title">{post.title}</h3>
            <h4 className="post-username">Posted by: {post.author.username}</h4>
            <h5 className="post-location">Location: {post.location}</h5>
            <h6 className="post-deliver">Will deliver? {post.willDeliver ? "Yes" : "No"}</h6>

            <br/>
            <h5 className="post-price">Price: {post.price}</h5>
            <br/>
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
            <br/>
            <button className="post-button" id="message" onClick={(e)=>{
              e.preventDefault();
              function displayMessageForm(){ document.getElementsByClassName("message-form").style={ 
                display: 'block'}}
              displayMessageForm()
            }}>
              {<img src={sendMessage} alt="message icon"/>} Message
            </button>
            <button className="post-button" id="edit">
              {<img src={editPencil} alt="pencil icon" />}Edit
            </button>
            <button className="post-button" id="delete">
              {<img src={deleteTrash} alt="trash icon" />}Delete
            </button>
            <div className="message-form">
                <form onSubmit={(e)=>{
                  e.preventDefault();
                  sendMessage( message, post._id, token )
                }}>
                  <input type="text" value={message} onChange = {(e)=>{setMessage(e.target.value)}}/>
                  <button type="submit">Message</button>
                </form>
            </div>  
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
