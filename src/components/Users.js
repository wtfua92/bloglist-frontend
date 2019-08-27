import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Users({ users }) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>User Name</th>
                    <th>Blogs created</th>
                </tr>
            </thead>
            <tbody>
                {users.map((u) =>
                    <tr key={u.id}>
                        <td><Link to={`/users/${u.id}`}>{u.name}</Link></td>
                        <td>{u.blogs.length}</td>
                    </tr>)}
            </tbody>
        </table>
    );
}

const mapStateToProps = ({ users }) => ({
    users: users.users
});

export default connect(mapStateToProps)(Users);