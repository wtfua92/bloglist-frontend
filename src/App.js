import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import blogService from './services/blogs';
// import loginService from './services/authentication';
//
import LoginForm from './components/LoginForm';
import CreateBlogForm from './components/CreateBlogForm';
import BlogList from './components/BlogList';
import Notification from './components/Notification/Notification';
import LoggedInUserDetails from './components/LoggedInUserDetails';
import Togglable from './components/Togglable';
import Navbar from './components/Navbar';
import Users from './components/Users';
import IndividualUser from './components/IndividualUser';

function App({ user }) {
    return (
        <div className="App">
            <Notification />
            <LoggedInUserDetails user={user} />
            <br/>
            <Router>
                <Navbar/>
                {!user.token ?
                    <LoginForm/> :
                    <Togglable buttonText="Create Blog Entry">
                        <CreateBlogForm/>
                    </Togglable>
                }
                <Route exact path="/" component={BlogList} />
                <Route path="/users" component={Users} />
                <Route path="/users/:id" render={({ match }) => <IndividualUser userId={match.params.id} />} />
            </Router>
        </div>
    );
}

const mapStateToProps = ({ users }) => ({
    user: users.currentUser
});

export default connect(mapStateToProps)(App);
