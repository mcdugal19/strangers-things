import React from "react";

import { registerUser } from "../api/ajaxHelpers";

const Register = ({
  username,
  setUsername,
  password,
  setPassword,
  token,
  setToken,
}) => {
  return (
    <div className="register-page">
      <h2>Welcome to Stranger's Things</h2>
      <form
        action=""
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            let response = await registerUser(username, password);
            setToken(response.data.token);
            window.localStorage.setItem(token);
          } catch (error) {
            console.error("There was a problem with your registration.", error);
          }
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
          name="pass2"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};


export default Register