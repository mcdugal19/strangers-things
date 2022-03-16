import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/ajaxHelpers";

const Search = ({ posts, setPosts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [clickedSearch, setClickedSearch] = useState(false);
  const [clickedClear, setClickedClear] = useState(false);

  function postMatches(post, searchTerm) {
  
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

  useEffect(() => {
    const getPosts = async () => {
      const postsArray = await fetchPosts();
      setPosts(postsArray);
    };
    getPosts();
  }, [clickedClear]);


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
      <button
        onClick={() => {
          setClickedClear(!clickedClear);
        }}
      >
        CLEAR
      </button>
    </form>
  );
};

export default Search;
