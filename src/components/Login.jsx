import React from "react";

import { registerUser } from "../api/ajaxHelpers";

const Login = ({
  username,
  setUsername,
  password,
  setPassword,
  token,
  setToken,
}) => {
  return (
    <div className="login-page">
      <h2>Welcome Back</h2>
      <div className="form-container">
      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault();
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
    </div>
  );
};

export default Login;
