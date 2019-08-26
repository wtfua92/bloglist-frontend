import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const style = {
        padding: 5
    };

    return (
        <nav style={{ marginBottom: 10 }}>
            <Link style={style} to='/'>Home</Link>
            <Link style={style} to='/users'>Users</Link>
            <Link style={style} to='/blogs'>Blogs</Link>
        </nav>
    );
}

export default Navbar;