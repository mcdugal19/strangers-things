import React from "react";

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
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="">Username:</label>
        <input type="text" />
        <label htmlFor="">Password:</label>
        <input type="password" />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
