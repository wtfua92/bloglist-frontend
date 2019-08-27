import React from 'react';
import { connect } from 'react-redux';
import { userLogout } from '../actions/user.action';

function LoggedInUserDetails({ user, userLogout }) {
  if (!user.token) {
    return null;
  }
  return <div>
    <span><strong>{user.name} ({user.username})</strong> is logged in </span>
    <button type="button" onClick={userLogout}>Log Out</button>
  </div>;
}

const mapDispatchToProps = {
  userLogout
};

export default connect(null, mapDispatchToProps)(LoggedInUserDetails);