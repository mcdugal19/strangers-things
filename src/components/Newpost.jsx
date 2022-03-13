import React from "react";

const NewPost = () => {
  return (
    <div className="newpost-page">
      <form
        className="newpost-form"
        onSubmit={async (e) => {
          e.preventDefault();
        }}
        action=""
      >
        <label htmlFor="">Title</label>
        <input type="text" placeholder="New title here" />
        <label htmlFor="">Post</label>
        <textarea placeholder="New post here" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPost;
