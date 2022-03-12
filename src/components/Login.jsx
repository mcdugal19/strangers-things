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
      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="">Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
