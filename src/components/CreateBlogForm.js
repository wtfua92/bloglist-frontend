import React from 'react';
import { connect } from 'react-redux';
import { createBlogSetField, createBlogClearAll } from '../actions/createBlogForm.action';
import { addBlog } from '../actions/blogs.action';
import { toggleVisibility } from '../reducers/togglable.reducer';

function CreateBlogForm({
    form,
    createBlogSetField,
    createBlogClearAll,
    addBlog,
    toggleVisibility,
    user
}) {
    const { title, author, url } = form;
    const formFilledIn = form.title && form.author && form.url;

    const submitHandler = (e) => {
        e.preventDefault();
        if (formFilledIn) {
            if (user && user.token) {
                form.user = user;
            }
            addBlog(form);
            createBlogClearAll();
            toggleVisibility();
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

const mapStateToProps = ({ createBlogForm, user }) => ({
    form: createBlogForm,
    user
});

const mapDispatchToProps = {
    createBlogSetField,
    createBlogClearAll,
    addBlog,
    toggleVisibility
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBlogForm);