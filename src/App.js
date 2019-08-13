import React, { useState, useEffect } from 'react';
import LoginForm from "./components/LoginForm";
import BlogList from "./components/BlogList";
import blogService from "./services/blogs";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    blogService.getAll().then(response => {
      setBlogs((blogs) => {
        return [...blogs, ...response];
      });
    })
  }, []);

  const usernameInputHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <div className="App">
      <LoginForm
          username={username}
          password={password}
          onUsernameChange={usernameInputHandler}
          onPasswordChange={passwordInputHandler}
          loginHandler={loginHandler}
      />
      <BlogList blogs={blogs} />
    </div>
  );
}

export default App;
