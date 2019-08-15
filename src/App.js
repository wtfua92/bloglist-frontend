import React, { useState, useEffect } from 'react';

import blogService from './services/blogs';
import loginService from './services/authentication';

import LoginForm from './components/LoginForm';
import CreateBlogForm from './components/CreateBlogForm';
import BlogList from './components/BlogList';
import Notification from './components/Notification/Notification';
import LoggedInUserDetails from './components/LoggedInUserDetails';
import Togglable from './components/Togglable';

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
    const [order, setOrder] = useState('desc');

    useEffect(() => {
        const savedUser = loginService.getUserData() || null;
        if (savedUser) {
            setUser(savedUser);
        }
        blogService.getAll().then(response => {
            setBlogs((blogs) => {
                return [...blogs, ...response];
            });
        });
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
            const userData = await loginService.userLogin({ username, password });
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

    const likeHandler = async ({ id, likes }, index) => {
        try {
            await blogService.updateBlog({
                id,
                likes: likes + 1
            });
            const updatedBlogList = [...blogs];
            updatedBlogList[index].likes += 1;
            setBlogs(updatedBlogList);
        } catch (e) {
            setNotification(e.message, 'error');
        }
    };

    const deleteBlog = async (id, index) => {
        try {
            await blogService.deleteBlog(id);
            setBlogs([...blogs.slice(0, index), ...blogs.slice(index + 1)]);
            setNotification('Item was removed', 'success');
        } catch (e) {
            setNotification(e.response.data.error, 'error');
        }
    };

    const sortByLikes = () => {
        let sortedBlogs;
        if (order === 'asc') {
            setOrder('desc');
            sortedBlogs = blogs.sort((a, b) => b.likes - a.likes);
        } else {
            setOrder('asc');
            sortedBlogs = blogs.sort((a, b) => a.likes - b.likes);
        }
        setBlogs(sortedBlogs);
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
                    onUsernameChange={(e) => {setUsername(e.target.value);}}
                    onPasswordChange={(e) => {setPassword(e.target.value);}}
                    loginHandler={loginHandler}
                /> :
                <Togglable buttonText="Create Blog Entry" ref={createBlogFormRef}>
                    <CreateBlogForm
                        title={title}
                        url={url}
                        author={author}
                        onTitleChange={(e) => { setNewBlogTitle(e.target.value); }}
                        onUrlChange={(e) => { setNewBlogUrl(e.target.value); }}
                        onAuthorChange={(e) => { setNewBlogAuthor(e.target.value); }}
                        onSubmit={createBlogHandler}
                    />
                </Togglable>

            }
            {!user || !blogs.length > 0 ? <p>No blogs in the list</p> : <BlogList blogOrder={order} sortByLikesHandler={sortByLikes} likeHandler={likeHandler} blogs={blogs} deleteItemHandler={deleteBlog} />}
        </div>
    );
}

export default App;
