import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import CreateBlogForm from './components/CreateBlogForm';
import BlogList from './components/BlogList';
import Notification from './components/Notification/Notification';
import Togglable from './components/Togglable';
import Navbar from './components/Navbar';
import Users from './components/Users';
import IndividualUser from './components/IndividualUser';
import BlogWithDetails from './components/BlogWithDetails';
import { initBlogs } from './actions/blogs.action';
import { initUsers } from './actions/user.action';

import './styles/App.scss';

function App({ user, initBlogs, initUsers }) {
    useEffect(() => {
        initBlogs();
        initUsers();
    }, [initBlogs, initUsers]);

    return (
        <div className="App">
            <Router>
                <Navbar user={user} />
                <div className="container is-fluid">
                    <Notification />
                    <div className="columns">
                        <div className="column is-one-third is-half-touch">
                            {!user.token ?
                                <LoginForm/> :
                                <Togglable buttonText="Create Blog Entry">
                                    <CreateBlogForm/>
                                </Togglable>
                            }
                        </div>
                        <div className="column">
                            <Route exact path="/" component={BlogList} />
                            <Route exact path="/users" component={Users} />
                            <Route path="/users/:id" render={({ match }) => <IndividualUser userId={match.params.id} />} />
                            <Route path="/blogs/:id" render={({ match }) => <BlogWithDetails blogId={match.params.id} />} />
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    );
}

const mapStateToProps = ({ users }) => ({
    user: users.currentUser
});

const mapDispatchToProps = {
    initBlogs,
    initUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
