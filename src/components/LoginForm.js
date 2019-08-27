import React from 'react';
import { connect } from 'react-redux';
import { userLogin, setUserFormField } from '../actions/user.action';
import { setNotification, clearNotification } from '../actions/notification.action';

function LoginForm({ user, userLogin, setUserFormField, setNotification, clearNotification }) {
    const { username, password } = user;
    const onSubmitHandler = (e) => {
        e.preventDefault();
        userLogin({
            username,
            password
        })
            .then(({ username }) => {
                setNotification(`${username} successfully logged in`, setTimeout(() => {
                    clearNotification();
                }, 1000), 'success');
            })
            .catch((e) => {
                setNotification(e.response.data.error, setTimeout(() => {
                    clearNotification();
                }, 1000), 'error');
            });
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
    user: users.currentUser
});

const mapDispatchToProps = {
    userLogin,
    setUserFormField,
    setNotification,
    clearNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);