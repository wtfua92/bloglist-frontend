import React from 'react';

function LoginForm({ username, password, onUsernameChange, onPasswordChange, loginHandler }) {
  return (
    <div>
      <h1>Log in form</h1>
      <form onSubmit={loginHandler}>
        <div>
          <label htmlFor="username">Username: </label>
          <input id="username" name="username" type="text" value={username} onChange={onUsernameChange}/>
        </div>
        <br/>
        <div>
          <label htmlFor="password">Password: </label>
          <input id="password" name="password" type="password" value={password} onChange={onPasswordChange}/>
        </div>
        <br/>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LoginForm;