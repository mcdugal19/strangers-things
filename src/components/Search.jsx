import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

const Search = ({posts, setPosts}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [clickedSearch, setClickedSearch] = useState(false);

  function postMatches(post, searchTerm) {
    // return true if any of the fields you want to check against include the text
    // strings have an .includes() method
    if (
      post.title.includes(searchTerm) ||
      post.description.includes(searchTerm) ||
      post.price.includes(searchTerm) ||
      post.location.includes(searchTerm) ||
      post.author.username.includes(searchTerm)
    ) {
      return true;
    }
  }



  useEffect(() => {
    const filteredPostsArray = posts.filter((post) => 
      postMatches(post, searchTerm)
    );
    setPosts(filteredPostsArray);
  }, [clickedSearch]);

 
  

  // then, in our jsx below... map over postsToDisplay instead of posts

  return (
    <form
      id="search"
      onSubmit={async (event) => {
        event.preventDefault();
        setClickedSearch(!clickedSearch);
      }}
    >
      <label htmlFor="keywords">Search</label>
      <input
        id="keywords"
        type="text"
        placeholder="enter keyword..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button type="submit">SEARCH</button>
    </form>
  );
};

export default Search;
