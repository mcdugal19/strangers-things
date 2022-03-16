import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setIsLoggedIn, setUsername, setToken, isLoggedIn }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/profile">User Profile</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        {!isLoggedIn ? (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        ) : null}
        {isLoggedIn ? (
          <li>
            <Link
              to="/"
              onClick={() => {
                setIsLoggedIn(false);
                setUsername("");
                localStorage.removeItem("token");
                setToken("");
              }}
            >
              Logout
            </Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
