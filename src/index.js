import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import alienIcon from "./images/alienIcon.png";
import { Posts, Navbar, NewPost, Profile, Login, Register } from "./components";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const [userMessages, setUserMessages] = useState([]);

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      setToken(localStorageToken);
    }
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Stranger's Things</h1>
        <h2>Get these things before THEY do!</h2>
        {isLoggedIn ? (
          <div className="is-logged-in">
            <img src={alienIcon} alt="user icon" />
            {username}
          </div>
        ) : null}
      </header> 
      {/* The below section links to the Navbar component */}
      <Navbar
        setIsLoggedIn={setIsLoggedIn}
        setUsername={setUsername}
        setPassword={setPassword}
        setToken={setToken}
        isLoggedIn={isLoggedIn}
      />
      <br />
      <div className="container">
        {/* The below section displays the different routes available for display*/}
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


          <Route path="/profile">
            <Profile
              userPosts={userPosts}
              setUserPosts={setUserPosts}
              isLoggedIn={isLoggedIn}
              token={token}
              username={username}
              setUsername={setUsername}
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
