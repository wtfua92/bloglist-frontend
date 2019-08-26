import React from 'react';
import { connect } from 'react-redux';
import { userLogin, setUserFormField } from '../actions/user.action';
import { setNotification, clearNotification } from '../actions/notification.action';

import idGenerator from '../helpers/idGenerator';

function LoginForm({ user, users, userLogin, setUserFormField, setNotification, clearNotification }) {
    const { username, password } = user;
    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (username && password && users.find((u) => u.username === username)) {
            userLogin({
                username,
                token: idGenerator(),
                id: idGenerator()
            });
            setNotification(`${username} successfully logged in`, setTimeout(() => {
                clearNotification();
            }, 1000), 'success');
        } else {
            setNotification(`There is no such user ${username}. Please, sign up first`, setTimeout(() => {
                clearNotification();
            }, 1000), 'error');
        }
    };

    return (
        <div className="login-form">
            <h1>Log in form</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input id="username" name="username" type="text" value={username} onChange={(e) => { setUserFormField({ username: e.target.value }); }} />
                </div>
                <br/>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input id="password" type="password" name="password" value={password} onChange={(e) => { setUserFormField({ password: e.target.value }); }} />
                </div>
                <br/>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
}

const mapStateToProps = ({ users }) => ({
    users: users.users,
    user: users.currentUser
});

const mapDispatchToProps = {
    userLogin,
    setUserFormField,
    setNotification,
    clearNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);