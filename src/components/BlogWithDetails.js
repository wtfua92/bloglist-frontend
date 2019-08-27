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
      <h3 className="blog-item--detailed__title"><a href={url}>{title}</a></h3>
      <span className="blog-item--detailed__likes">Likes: {likes} </span>
      <button className="blog-item--detailed__like-button" type="button" onClick={() => { likeBlog({ title, author, url, likes: likes + 1, id }); }}>Like</button>
      <p className="blog-item--detailed__user">Added by {blog.user.username}</p>
      {showDeleteButton && <button className="blog-item--detailed__remove-button" onClick={() => { onDelete(id); }} type="button">Remove</button>}
      <AddComment blog={blog} />
      {
        blog.comments.length > 0 && <div className="blog-item--detailed__comments">
          <p>Comments: </p>
          <ul>
            {blog.comments.map(c => <li key={c.length * Math.floor(Math.random() * Math.random())}>{c}</li>)}
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