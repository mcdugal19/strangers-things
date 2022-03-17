import React, { useState } from "react";
import deleteTrash from "./images/deleteTrash.png";
import editPencil from "./images/editPencil.png";
import { deletePost } from "../api/ajaxHelpers";
import EditPostCard from "./EditPostCard";


// In the map on profile, this displays a single post from the userPosts
const SingleProfilePost = ({ post, token, userPosts, setUserPosts }) => {
  const [profilePostDeleted, setProfilePostDeleted] = useState(false);
  const [clickedEdit, setClickedEdit] = useState(false);

  return (
    <div className="post-card" key={post._id}>
      {!post.active ? (
        <>
          <h3
            className="post-title"
            style={{
              textDecorationLine: "line-through",
              textDecorationStyle: "solid",
            }}
          >
            {post.title}
          </h3>
          <p style={{ color: "red" }}>Post Deleted</p>
        </>
      ) : (
        <h3 className="post-title">{post.title}</h3>
      )}
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
        <p className="post-created">
          Created On: {new Date(post.createdAt).toLocaleString()}
        </p>
        {post.updatedAt !== post.createdAt ? (
          <p className="post-updated">
            Last Updated On: {new Date(post.updatedAt).toLocaleString()}
          </p>
        ) : null}
      </span>
      <br />
      <div className="button-container">
        {!post.active ? null : (
          <>
            <button
              className="post-button"
              id="edit"
              onClick={(e) => {
                e.preventDefault();
                setClickedEdit(!clickedEdit);
              }}
            >
              {<img src={editPencil} alt="pencil icon" />}Edit
            </button>
            <button
              className="post-button"
              id="delete"
              onClick={(e) => {
                e.preventDefault();
                setProfilePostDeleted(true);
                deletePost(post._id, token);
              }}
            >
              {<img src={deleteTrash} alt="trash icon" />}Delete
            </button>
          </>
        )}
      </div>
      {/* the below section opens the EditPost form */}
      <div className="editpost-form">
        {clickedEdit ? (
          <EditPostCard
            setClickedEdit={setClickedEdit}
            posts={userPosts}
            setPosts={setUserPosts}
            token={token}
            post={post}
          />
        ) : null}
      </div>
      <div className="post-deleted">
        {profilePostDeleted ? "Post Deleted" : null}
      </div>
    </div>
  );
};

export default SingleProfilePost;
