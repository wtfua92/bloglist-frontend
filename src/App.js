import React from 'react';
import { connect } from 'react-redux';

// import blogService from './services/blogs';
// import loginService from './services/authentication';
//
import LoginForm from './components/LoginForm';
import CreateBlogForm from './components/CreateBlogForm';
import BlogList from './components/BlogList';
import Notification from './components/Notification/Notification';
import LoggedInUserDetails from './components/LoggedInUserDetails';
import Togglable from './components/Togglable';

const createBlogFormRef = React.createRef();

function App({ user }) {
    return (
        <div className="App">
            <Notification />
            <LoggedInUserDetails user={user} />
            <br/>
            {!user.token ?
                <LoginForm user={user} /> :
                <Togglable buttonText="Create Blog Entry" ref={createBlogFormRef}>
                    <CreateBlogForm />
                </Togglable>
            }
            <BlogList />
        </div>
    );
}

const mapStateToProps = ({ user }) => ({
    user
});

export default connect(mapStateToProps)(App);
