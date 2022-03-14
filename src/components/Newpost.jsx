import React, { useState } from "react";
import { createPost } from "../api/ajaxHelpers";

const NewPost = ({token, posts, setPosts, isLoggedIn}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  return (
    <div className="newpost-page">
      <form
        className="newpost-form"
        onSubmit={async (e) => {
          e.preventDefault();
          try{
          const response = await createPost({title, description, price, location, willDeliver}, {token});
          const data = await response.json();
          console.log(data);
          let newArr =[...posts, data.data.post];
          setPosts(newArr)
          } catch(error){
            console.error(error);
          }
        }}
        action=""
      >
        <label htmlFor="">Title</label>
        <input
          type="text"
          placeholder="New title here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="">Description</label>
        <textarea
          placeholder="New post here"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <label htmlFor="">Price</label>
        <input type="text" placeholder="Price" value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}/>
        <label htmlFor="">Location</label>
        <input type="text" placeholder="Location" value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}/>
        <label htmlFor="">Will Deliver?</label>
        <input type="checkbox" 
          onChange={() => {
            setWillDeliver(true);
          }}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPost;
