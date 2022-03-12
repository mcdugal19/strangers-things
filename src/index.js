import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Posts, Navbar, NewPost, Profile, Login, Register } from "./components";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");

  return (
    <div className="app">
      <header>
        <h1>Stranger's Things</h1>
        <Navbar />
      </header>
      <div className="container">
        <Route exact path="/">
          <Posts
            posts={posts}
            setPosts={setPosts}
            isLoggedIn={isLoggedIn}
            token={token}
            username={username}
          />
          <NewPost
            posts={posts}
            setPosts={setPosts}
            isLoggedIn={isLoggedIn}
            token={token}
            username={username}
          />
        </Route>
        <Route path="/posts">
          <Posts
            posts={posts}
            setPosts={setPosts}
            isLoggedIn={isLoggedIn}
            token={token}
            username={username}
          />
          <NewPost
            posts={posts}
            setPosts={setPosts}
            isLoggedIn={isLoggedIn}
            token={token}
            username={username}
          />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/login">
          <Login
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            isLoggedIn={isLoggedIn}
            setIsLoggedin={setIsLoggedin}
            token={token}
            setToken={setToken}
          />
        </Route>
        <Route path="/register">
          <Register
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            isLoggedIn={isLoggedIn}
            setIsLoggedin={setIsLoggedin}
            token={token}
            setToken={setToken}
          />
        </Route>
      </div>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
