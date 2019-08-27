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
            <h1 className="is-size-4">New Entry</h1>
            <br/>
            <form onSubmit={submitHandler}>
                <div className="field">
                    <label htmlFor="title" className="label">Title:</label>
                    <div className="control">
                        <input id="title" className="input" name="title" value={title} type="text" onChange={(e) => { createBlogSetField({ title: e.target.value }); }}/>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="author" className="label">Author:</label>
                    <div className="control">
                        <input id="author" className="input" name="author" value={author} type="text" onChange={(e) => { createBlogSetField({ author: e.target.value });}} />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="url" className="label">URL:</label>
                    <div className="control">
                        <input id="url" className="input" name="url" value={url} type="text" onChange={(e) => { createBlogSetField({ url: e.target.value }); }} />
                    </div>
                </div>
                <button type="submit" className="button is-primary">Save</button>
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