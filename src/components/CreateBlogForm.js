import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createBlogSetField, createBlogClearAll } from '../actions/createBlogForm.action';
import { addBlog } from '../actions/blogs.action';
import { toggleVisibility } from '../reducers/togglable.reducer';
import { userAddBlog } from '../actions/user.action';

function CreateBlogForm({
    form,
    createBlogSetField,
    createBlogClearAll,
    addBlog,
    toggleVisibility,
    history
}) {
    const { title, author, url } = form;
    const formFilledIn = form.title && form.author && form.url;

    const submitHandler = (e) => {
        e.preventDefault();
        if (formFilledIn) {
            addBlog(form);
            createBlogClearAll();
            toggleVisibility();
            history.push('/');
        }
    };

    return (
        <div>
            <h1>New Entry</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Title </label>
                    <input id="title" name="title" value={title} type="text" onChange={(e) => { createBlogSetField({ title: e.target.value }); }}/>
                </div>
                <br/>
                <div>
                    <label htmlFor="author">Author </label>
                    <input id="author" name="author" value={author} type="text" onChange={(e) => { createBlogSetField({ author: e.target.value });}} />
                </div>
                <br/>
                <div>
                    <label htmlFor="url">URL </label>
                    <input id="url" name="url" value={url} type="text" onChange={(e) => { createBlogSetField({ url: e.target.value }); }} />
                </div>
                <br/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

const mapStateToProps = ({ createBlogForm, users }) => ({
    form: createBlogForm,
    user: users.currentUser
});

const mapDispatchToProps = {
    createBlogSetField,
    createBlogClearAll,
    addBlog,
    toggleVisibility,
    userAddBlog
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateBlogForm));