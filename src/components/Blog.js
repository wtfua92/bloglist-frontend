import React from 'react';
// import PropTypes from 'prop-types';
// import authService from '../services/authentication';

const Blog = ({ blog, index, onDetailsChange, onLike }) => {
    // const [detailsVisible, setDetailsVisible] = useState(false);
    // const [showDeleteButton, setShowDeleteButton] = useState(false);
    //
    // useEffect(() => {
    //     const userData = authService.getUserData();
    //     if (userData) {
    //         setShowDeleteButton(blog.user.username === userData.username);
    //     }
    // }, [blog.user]);

    const style = {
        width: '300px',
        maxHeight: blog.details ? '' : '80px',
        border: '1px solid #333',
        borderRadius: '5px',
        padding: '5px',
        margin: '5px',
        flexBasis: '1',
        flexGrow: '1.5'
    };

    return (<div className="blog-item" style={style}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="blog-item__title" onClick={() => { onDetailsChange(index); }}><strong>"{blog.title}"</strong></p>
        <p className="blog-item__author"> by {blog.author}</p>
        {
            blog.details && <div className="blog-item__info">
                <span className="blog-item__info__likes">Likes: {blog.likes} </span>
                <button className="blog-item__info__like-button" type="button" onClick={() => { onLike(index); }}>Like</button>
                <p className="blog-item__info__user">Added by {blog.user.username}</p>
                <button className="blog-item__info__remove-button" type="button">Remove</button>
            </div>
        }
    </div>);
};

// Blog.propTypes = {
//     blog: PropTypes.object.isRequired,
//     likeHandler: PropTypes.func.isRequired,
//     deleteHandler: PropTypes.func.isRequired,
//     index: PropTypes.number.isRequired
// };

export default Blog;