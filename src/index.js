import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Posts } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
