import React from "react";

import { fetchUserToken, } from "../api/ajaxHelpers";

const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  return (
    <div className="login-page">
      <h2>Welcome Back</h2>
      <div className="form-container">
      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const response = await fetchUserToken(username, password);
            localStorage.setItem('token', response)
            setIsLoggedIn(true)
          } catch (error) {
            console.error(
              "There was a problem with your login information.",
              error
            );
          }
        }}
      >
        
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Log in</button>
      </form>
      </div>
      <div className="login-confirmation" style={{ 
      display: isLoggedIn ? 'block' : 'none',}}>
        <h3>
          WELCOME BACK
        </h3>
      </div>
    </div>
  );
};

export default Login;
