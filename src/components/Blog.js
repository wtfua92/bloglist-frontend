import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import authService from '../services/authentication';

const Blog = ({ blog }) => {
    return (<div className="blog-item tile is-child box">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <span style={{ paddingRight: 8 }} className="blog-item__title"><strong><Link to={`/blogs/${blog.id}`}>"{blog.title}"</Link></strong></span>
        <span className="blog-item__author">by {blog.author}</span>
    </div>);
};

// Blog.propTypes = {
//     blog: PropTypes.object.isRequired,
//     likeHandler: PropTypes.func.isRequired,
//     deleteHandler: PropTypes.func.isRequired,
//     index: PropTypes.number.isRequired
// };

export default Blog;