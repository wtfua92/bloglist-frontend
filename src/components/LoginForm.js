import React from 'react';
import {useField} from "../hooks";

function LoginForm({loginHandler}) {
    const {reset: resetUsername, ...username} = useField('text');
    const {reset: resetPassword, ...password} = useField('password');

    const onSubmitHandler = (event) => {
        loginHandler(username.value, password.value, event);
        resetPassword();
        resetUsername();
    };

    return (
        <div className="login-form">
            <h1>Log in form</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input id="username" name="username" {...username} />
                </div>
                <br/>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input id="password" name="password" {...password} />
                </div>
                <br/>
                <button type="submit">Log in</button >
            </form>
        </div>
    );
}

export default LoginForm;