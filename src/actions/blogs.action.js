import { blogActions } from '../reducers/blogs.reducer';

export const addBlog = (newBlog) => ({
    type: blogActions.ADD_BLOG,
    data: {
        newBlog
    }
});

export const deleteBlog = (blogId) => ({
    type: blogActions.DELETE_BLOG,
    data: {
        blogId
    }
});

export const likeBlog = (index) => ({
    type: blogActions.LIKE_BLOG,
    data: {
        index
    }
});

export const changeDetailsVisibility = (index) => ({
    type: blogActions.CHANGE_DETAILS_VISIBILITY,
    data: {
        index
    }
});

export default {
    addBlog,
    deleteBlog,
    likeBlog,
    changeDetailsVisibility
};