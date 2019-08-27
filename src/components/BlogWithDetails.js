import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { deleteBlog, likeBlog } from '../actions/blogs.action';
import { userRemoveBlog } from '../actions/user.action';
import AddComment from './AddComment';

function BlogWithDetails({ blog, currentUser, likeBlog, deleteBlog, userRemoveBlog, history }) {
    if (!blog) {
        history.push('/');
        return null;
    }
    const { likes, title, id, author, url } = blog;
    const showDeleteButton = blog.user.username === currentUser.username && currentUser.token;

    const onDelete = (id) => {
        deleteBlog(id);
        userRemoveBlog(id);
        history.push('/');
    };

    return (
        <div className="blog-item--detailed">
            <h3 className="blog-item--detailed__title is-size-3"><a href={url}>{title}</a></h3>
            <span className="blog-item--detailed__likes">Likes: {likes} </span>
            <button className="blog-item--detailed__like-button button is-info is-small is-outlined" type="button" onClick={() => { likeBlog({ title, author, url, likes: likes + 1, id }); }}>Like</button>
            <br/>
            <span className="blog-item--detailed__user">Added by <strong>{blog.user.username}</strong> </span>
            {showDeleteButton && <button className="blog-item--detailed__remove-button button is-danger is-small is-outlined" onClick={() => { onDelete(id); }} type="button">Remove</button>}
            <br/>
            <br/>
            <AddComment blog={blog} />
            <br/>
            {
                blog.comments.length > 0 && <div className="blog-item--detailed__comments">
                    <p><strong>Comments:</strong></p>
                    <br/>
                    <ul className="box">
                        {blog.comments.map(c => <li style={{ marginBottom: 10 }} key={c.length * Math.floor(Math.random() * Math.random())}>{c}</li>)}
                    </ul>
                </div>
            }
        </div>
    );
}

const mapStateToProps = ({ blogs, users }, { blogId }) => ({
    blog: blogs.find(b => b.id === blogId),
    currentUser: users.currentUser
});

const mapDispatchToProps = {
    likeBlog,
    deleteBlog,
    userRemoveBlog
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogWithDetails));