import React from 'react';
import Blog from "./Blog";

function BlogList({blogs, likeHandler}) {
    const style = {
        display: 'flex',
        flexWrap: 'wrap'
    };

    return (
        <div>
            <h2>List of blogs:</h2>
            <div style={style}>
                {
                    blogs && blogs.map((b, i) => (<Blog likeHandler={likeHandler} blog={b} index={i} key={b.id} />))
                }
            </div>
        </div>
    );
}

export default BlogList;