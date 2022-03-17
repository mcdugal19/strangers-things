import React, {  useEffect } from "react";
import { fetchPosts } from "../api/ajaxHelpers";
import { SinglePost } from "./";
import Search from "./Search";

// The posts section displays all posts from the API
const Posts = ({ posts, setPosts, isLoggedIn, token, username }) => {
  useEffect(() => {
    const getPosts = async () => {
      const postsArray = await fetchPosts();
      setPosts(postsArray);
    };
    getPosts();
  }, [setPosts]);

  return (
    <div className="post-page">
      {/* the Search component is displayed here */}
      <Search posts={posts} setPosts={setPosts} />

      {posts.map((post, i) => {
        // the below section displays the individual posts
        return (
          <SinglePost
            key={i}
            post={post}
            token={token}
            isLoggedIn={isLoggedIn}
            username={username}
            posts={posts}
            setPosts={setPosts}
          />
        );
      })}
    </div>
  );
};

export default Posts;
