import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import { Posts, Navbar, NewPost, Profile, Login, Register } from "./components";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const [userMessages, setUserMessages] = useState([])


  useEffect(() => {
    const localStorageToken = localStorage.getItem('token')
    if (localStorageToken !== '') { setToken(localStorageToken)}
  }, [token])



  return (
    <div className="app">
      <header>
        <h1>Stranger's Things</h1>
        <Navbar />
        <br/>
      </header>
      <div className="container">
        <Switch>
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

          <Route path="/NewPost">
            <NewPost />
          </Route>
          
          <Route path="/profile">
            <Profile 
            userPosts={userPosts}
            setUserPosts={setUserPosts}
            isLoggedIn={isLoggedIn}
            token={token}
            username={username}
            userMessages={userMessages}
            setUserMessages={setUserMessages}
            setToken={setToken}
            />
          </Route>

          <Route path="/login">
            <Login
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
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
              setIsLoggedIn={setIsLoggedIn}
              token={token}
              setToken={setToken}
            />
          </Route>
        </Switch>
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
