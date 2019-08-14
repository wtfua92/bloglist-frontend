import React from 'react';

function LoggedInUserDetails({user, onLogout}) {
    return user && <div>
        <span><strong>{user.name} ({user.username})</strong> is logged in </span>
        <button type="button" onClick={onLogout}>Log Out</button>
    </div>;
}

export default LoggedInUserDetails;