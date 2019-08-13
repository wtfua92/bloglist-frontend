import React from 'react';
import Blog from "./Blog";

function BlogList({blogs}) {
    return (
        <div>
            <h2>List of blogs:</h2>
            {
                blogs && blogs.map(b => (<Blog blog={b} key={b.id} />))
            }
        </div>
    );
}

export default BlogList;