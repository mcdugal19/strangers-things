import React, { useState, useEffect } from "react";
import edit from "./images/edit.png";
import mail from "./images/mail.jpeg";
import deletePost from "./images/deletePost.jpeg";
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
          <div className="post-card" key={post._id}>
            <h3 className="post-title">{post.title}</h3>
            
            <h4 className="post-username">From: {post.author.username}</h4>
            <br/>
            <p className="post-content">{post.description}</p>
            <br/>
            <span className="post-time">
                {console.log(post.createdAt)}
              <p className="post-created">Created On:{post.createdAt}</p>
              {post.updatedAt ? (
                <p className="post-updated">Last Updated On:{post.updatedAt}</p>
              ) : null}
            </span>
            <br/>
            <button className="button" id="message">{<img src={mail} width={35} height={25} alt="Mail" />}Message</button>
            <button className="button" id="edit">{<img src={edit} width={25} alt="Edit" />}Edit</button>
            <button className="button" id="delete">{<img src={deletePost} width={23} alt="Post Delete" />}Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
