import React from 'react';

function CreateBlogForm({ title, url, onTitleChange, onUrlChange, onSubmit }) {
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
                    <label htmlFor="url">Url </label>
                    <input id="url" name="url" value={url} type="text" onChange={onUrlChange}/>
                </div>
                <br/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default CreateBlogForm;