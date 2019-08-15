import React, { useState, useEffect } from 'react';

import blogService from "./services/blogs";
import loginService from "./services/authentication";

import LoginForm from "./components/LoginForm";
import CreateBlogForm from "./components/CreateBlogForm";
import BlogList from "./components/BlogList";
import Notification from "./components/Notification/Notification";
import LoggedInUserDetails from "./components/LoggedInUserDetails";
import Togglable from "./components/Togglable";

const createBlogFormRef = React.createRef();

function App() {
  const [blogs, setBlogs] = useState([]);
  const [title, setNewBlogTitle] = useState('');
  const [author, setNewBlogAuthor] = useState('');
  const [url, setNewBlogUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('');

  useEffect(() => {
    const savedUser = loginService.getUserData() || null;
    if (savedUser) {
      setUser(savedUser);
    }
    blogService.getAll().then(response => {
      setBlogs((blogs) => {
        console.log(response);
        return [...blogs, ...response];
      });
    })
  }, []);

  const setNotification = (message = '', type = '') => {
    setNotificationMessage(message);
    setNotificationType(type);
    setTimeout(() => {
      setNotification();
    }, 3000);
  };

  const clearCreateBlogTable = () => {
    setNewBlogUrl('');
    setNewBlogAuthor('');
    setNewBlogTitle('');
  };

  const clearLoginTable = () => {
    setUsername('');
    setPassword('');
  };

  const logoutHandler = () => {
    setUser(null);
    loginService.removeUserData();
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const userData = await loginService.userLogin({username, password});
      setUser(userData);
      loginService.saveUserData(userData);
      clearLoginTable();
      setNotification('Successfully logged in', 'success');
    } catch (e) {
      setNotification(e.response.data.error, 'error');
      clearLoginTable();
    }
  };

  const createBlogHandler = async (event) => {
    event.preventDefault();
    const newBlogItem = {
      title,
      author,
      url
    };
    try {
      const newBlog = await blogService.createBlog(newBlogItem);
      setNotification('Blog entry successfully created', 'success');
      setBlogs([...blogs, newBlog]);
      clearCreateBlogTable();
      createBlogFormRef.current.toggleVisibility();
    } catch (e) {
      setNotification(e.message, 'error');
      clearCreateBlogTable();
    }
  };

  const likeHandler = async (blog) => {
    const likedBlog = {
      ...blog,
      likes: blog.likes + 1
    };
    const updatedBlog = await blogService.updateBlog(likedBlog);
    const updatedBlogList = blogs.map((b) => {
      if (b.id === updatedBlog.id) {
        b.likes += 1;
      }
      return b;
    });
    setBlogs(updatedBlogList);
  };

  return (
    <div className="App">
      <Notification message={notificationMessage} type={notificationType} />
      <LoggedInUserDetails user={user} onLogout={logoutHandler} />
      <br/>
      {!user ?
            <LoginForm
              username={username}
              password={password}
              onUsernameChange={(e) => {setUsername(e.target.value)}}
              onPasswordChange={(e) => {setPassword(e.target.value)}}
              loginHandler={loginHandler}
          /> :
          <Togglable buttonText="Create Blog Entry" ref={createBlogFormRef}>
            <CreateBlogForm
                title={title}
                url={url}
                author={author}
                onTitleChange={(e) => { setNewBlogTitle(e.target.value) }}
                onUrlChange={(e) => { setNewBlogUrl(e.target.value) }}
                onAuthorChange={(e) => { setNewBlogAuthor(e.target.value) }}
                onSubmit={createBlogHandler}
            />
          </Togglable>

      }
      {!user || !blogs.length > 0 ? <p>No blogs in the list</p> : <BlogList likeHandler={likeHandler} blogs={blogs} />}
    </div>
  );
}

export default App;
