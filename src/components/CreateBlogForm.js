import React from 'react';

function CreateBlogForm({ title, url, author, onTitleChange, onUrlChange, onAuthorChange, onSubmit }) {
    return (
        <div>
            <h1>New Entry</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="title">Title </label>
                    <input id="title" name="title" value={title} type="text" onChange={onTitleChange}/>
                </div>
                <br/>
                <div>
                    <label htmlFor="author">Author </label>
                    <input id="author" name="author" value={author} type="text" onChange={onAuthorChange}/>
                </div>
                <br/>
                <div>
                    <label htmlFor="url">URL </label>
                    <input id="url" name="url" value={url} type="text" onChange={onUrlChange}/>
                </div>
                <br/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default CreateBlogForm;