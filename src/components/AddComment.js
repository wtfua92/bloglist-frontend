import React from 'react';
import { connect } from 'react-redux';
import { setCommentField, clearCommentField } from '../actions/comment.action';
import { addCommentToBlog } from '../actions/blogs.action';

function AddComment({ blog, comment, setCommentField, addCommentToBlog }) {
    const submitComment = (e) => {
        e.preventDefault();
        const updatedBlog = { title: blog.title, comments: blog.comments, id: blog.id };
        updatedBlog.comments.push(comment);
        addCommentToBlog(updatedBlog);
    };

    return (
        <div>
            <form onSubmit={(e) => { submitComment(e); }}>
                <div className="field">
                    <label htmlFor="" className="label">Add Comment:</label>
                    <div className="control">
                        <input type="text" className="input" id="comment" value={comment} onChange={(e) => { setCommentField(e.target.value); }} /></div>
                </div>
                <button type="submit" className="button is-info is-outlined">Add</button>
            </form>
        </div>
    );
}

const mapStateToProps = ({ comment }) => ({
    comment
});

const mapDispatchToProps = {
    setCommentField,
    clearCommentField,
    addCommentToBlog
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);