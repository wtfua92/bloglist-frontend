import React from 'react';
import { connect } from 'react-redux';

import Blog from './Blog';
import { changeDetailsVisibility, likeBlog } from '../actions/blogs.action';

function BlogList({ blogs, changeDetailsVisibility, likeBlog }) {
    const style = {
        display: 'flex',
        flexWrap: 'wrap'
    };

    return (
        <div className="blog-list">
            <h2>
                List of blogs:
            </h2>
            <div style={style}>
                {
                    blogs && blogs.map((b, i) => (<Blog blog={b} onLike={likeBlog} onDetailsChange={changeDetailsVisibility} index={i} key={b.id} />))
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    blogs: state.blogs
});

const mapDispatchToProps = {
    changeDetailsVisibility,
    likeBlog
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);