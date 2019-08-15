import React, { useState } from 'react';

const Blog = ({ blog, likeHandler }) => {
    const [detailsVisible, setDetailsVisible] = useState(false);
    const style = {
        width: '300px',
        maxHeight: detailsVisible ? '' : '80px',
        border: '1px solid #333',
        borderRadius: '5px',
        padding: '5px',
        margin: '5px',
        flexBasis: '1',
        flexGrow: '1.5'
    };

    return (<div style={style}>
        <p onClick={() => setDetailsVisible(!detailsVisible)}><strong>"{blog.title}"</strong></p>
        <p> by {blog.author}</p>
        {detailsVisible && <div>
            <span>Likes: {blog.likes} </span>
            <button type="button" onClick={() => { likeHandler(blog) }}>Like</button>
            <p>Added by {blog.user.username}</p>
        </div>}
    </div>);
};

export default Blog