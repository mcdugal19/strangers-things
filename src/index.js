import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Posts, Navbar, NewPost, Profile, Login, Register } from "./components";

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <div className="app">
        <header>
          <h1>Stranger's Things</h1>
          <Navbar />
        </header>
        <div className="container">
          <Posts posts={posts} setPosts={setPosts} />
          <NewPost />
          <Switch>
            <Route path="/posts">
              <Posts />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
