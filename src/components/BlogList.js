import React from 'react';
import { connect } from 'react-redux';

import Blog from './Blog';
import { changeDetailsVisibility, likeBlog, deleteBlog } from '../actions/blogs.action';
import { userRemoveBlog } from '../actions/user.action';

function BlogList({ blogs, changeDetailsVisibility, likeBlog, user, deleteBlog, userRemoveBlog }) {
    const style = {
        display: 'flex',
        flexWrap: 'wrap'
    };

    const onDelete = (blogId) => {
        deleteBlog(blogId);
        userRemoveBlog(blogId);
    };

    return (
        <div className="blog-list">
            <h2>
                List of blogs:
            </h2>
            <div style={style}>
                {
                    blogs.map((b, i) =>
                        <Blog blog={b}
                            onLike={likeBlog}
                            onDetailsChange={changeDetailsVisibility}
                            index={i}
                            key={b.id}
                            onDelete={onDelete}
                            showDeleteButton={user.id === b.user}
                        />
                    )
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    blogs: state.blogs,
    user: state.users.currentUser
});

const mapDispatchToProps = {
    changeDetailsVisibility,
    likeBlog,
    deleteBlog,
    userRemoveBlog
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);