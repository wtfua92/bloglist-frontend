import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import authService from '../services/authentication';

const Blog = ({ blog }) => {
    const style = {
        width: '300px',
        maxHeight: blog.details ? '' : '80px',
        border: '1px solid #333',
        borderRadius: '5px',
        padding: '5px',
        margin: '5px'
    };

    return (<div className="blog-item" style={style}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <span className="blog-item__title"><strong><Link to={`/blogs/${blog.id}`}>"{blog.title}"</Link></strong></span>
        <span className="blog-item__author"> by {blog.author}</span>
    </div>);
};

// Blog.propTypes = {
//     blog: PropTypes.object.isRequired,
//     likeHandler: PropTypes.func.isRequired,
//     deleteHandler: PropTypes.func.isRequired,
//     index: PropTypes.number.isRequired
// };

export default Blog;