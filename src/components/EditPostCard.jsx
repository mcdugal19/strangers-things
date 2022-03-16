// all components that help us edit a post should go here
import { useState } from "react";
import { editPost } from "../api/ajaxHelpers";
import React from "react";

const EditPostCard = ({ token, post, posts, setPosts, setClickedEdit }) => {
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editLocation, setEditLocation] = useState("");
  const [editWillDeliver, setEditWillDeliver] = useState(false);

  return (
    <>
      <form
        className="editpost-form"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const editPostObj = {
              title: editTitle !== "" ? editTitle : post.title,
              description:
                editDescription !== "" ? editDescription : post.description,
              price: editPrice !== "" ? editPrice : post.price,
              location: editLocation !== "" ? editLocation : post.location,
              willDeliver:
                editWillDeliver === post.willDeliver
                  ? post.willDeliver
                  : editWillDeliver,
            };
            const response = await editPost(editPostObj, post._id, token);
            const editedPost = response.data.post;
            const filteredPosts = posts.filter((postObj)=> {
              return postObj._id  !== editedPost._id
            })
            const newArr = [editedPost, ...filteredPosts];
            setPosts(newArr);
            setClickedEdit(false)
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <label>Edit Title</label>
        <input
          type="text"
          placeholder="New title here"
          value={editTitle}
          onChange={(e) => {
            setEditTitle(e.target.value);
          }}
        />
        <label>Edit Description</label>
        <textarea
          placeholder="New post here"
          value={editDescription}
          onChange={(e) => {
            setEditDescription(e.target.value);
          }}
        />
        <label>Edit Price</label>
        <input
          type="text"
          placeholder="Price"
          value={editPrice}
          onChange={(e) => {
            setEditPrice(e.target.value);
          }}
        />
        <label>Edit Location</label>
        <input
          type="text"
          placeholder="Location"
          value={editLocation}
          onChange={(e) => {
            setEditLocation(e.target.value);
          }}
        />
        <label>Edit Will Deliver?</label>
        <input
          type="checkbox"
          onChange={() => {
            setEditWillDeliver(true);
          }}
        />
        <button type="submit">Edit Post</button>
      </form>
    </>
  );
};

export default EditPostCard;
