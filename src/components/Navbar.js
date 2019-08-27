import React from 'react';
import { Link } from 'react-router-dom';
import LoggedInUserDetails from './LoggedInUserDetails';

function Navbar({ user }) {
    return (
        <nav className="navbar is-light" style={{ marginBottom: 10 }}>
            <div className="navbar-brand">
                <Link className="navbar-item" to='/'>Home</Link>
                <Link className="navbar-item" to='/users'>Users</Link>
                <div className="level is-fullwidth" style={{ marginLeft: 10 }}>
                    <div className="level-right">
                        <div className="level-item">
                            <LoggedInUserDetails user={user} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;