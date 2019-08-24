import React from 'react';
import { connect } from 'react-redux';
import { userLogout } from '../actions/user.action';

function LoggedInUserDetails({ user, userLogout }) {
    return user.token && <div>
        <span><strong>{user.name} ({user.username})</strong> is logged in </span>
        <button type="button" onClick={userLogout}>Log Out</button>
    </div>;
}

const mapDispatchToProps = {
    userLogout
};

export default connect(null, mapDispatchToProps)(LoggedInUserDetails);