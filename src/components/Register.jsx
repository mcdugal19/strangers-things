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
      <div className="form-container">
        <form
          action=""
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const response = await registerUser(username, password);
              setToken(response.data.token)
            } catch (error) {
              console.error(
                "There was a problem with your registration.",
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
