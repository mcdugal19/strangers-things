import React, { useState, useEffect } from "react";
import { createPost } from "../api/ajaxHelpers";

const NewPost = ({ token, posts, setPosts, isLoggedIn }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  // useEffect(()=> {

  // }, [])

  return (
    <div className="newpost-page">
      {!isLoggedIn ? (
        <div className="newpost-form">Please log in/register to create posts
        or send messages.</div>
      ) : (
        <>
          <form
            className="newpost-form"
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const postObj = {
                  title,
                  description,
                  price,
                  location,
                  willDeliver,
                };
                const response = await createPost(postObj, token);
                let newArr = [...posts, response.data.post];
                setPosts(newArr);
              } catch (error) {
                console.error(error);
              }
            }}
          >
            <label>Title</label>
            <input
              type="text"
              placeholder="New title here"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label>Description</label>
            <textarea
              placeholder="New post here"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <label>Price</label>
            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <label>Location</label>
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <label>Will Deliver?</label>
            <input
              type="checkbox"
              onChange={() => {
                setWillDeliver(true);
              }}
            />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </div>
  );
};

export default NewPost;
