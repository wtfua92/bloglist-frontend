import React from 'react';
import { connect } from 'react-redux';

function IndividualUser({ blogs }) {
    return blogs.length === 0 ? <p>Added 0 blogs</p> : <div>
        <h3>Added following blogs:</h3>
        <ul>
            {blogs.map((b) => <li key={b.id}>{b.title}</li>)}
        </ul>
    </div>;
}

const mapStateToProps = ({ blogs }, { userId }) => ({
    blogs: blogs.filter((b) => b.user.id === userId)
});

export default connect(mapStateToProps)(IndividualUser);