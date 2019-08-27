import { blogActions } from '../reducers/blogs.reducer';
import blogService from '../services/blogs.service';

export const initBlogs = () => {
    return async (dispatch) => {
        let blogs = [];
        try {
            blogs = await blogService.getAll();
        } catch (e) {
            console.log(e);
        }

        dispatch({
            type: blogActions.INIT_BLOGS,
            data: {
                blogs
            }
        });
    };
};

export const addBlog = (newBlog) => {
    return async (dispatch) => {
        try {
            const savedBlog = await blogService.createBlog(newBlog);
            dispatch({
                type: blogActions.ADD_BLOG,
                data: {
                    newBlog: savedBlog
                }
            });
        } catch (e) {
            throw (e);
        }
    };
};

export const deleteBlog = (blogId) => {
    return async (dispatch) => {
        try {
            await blogService.deleteBlog(blogId);
            dispatch({
                type: blogActions.DELETE_BLOG,
                data: {
                    blogId
                }
            });
        } catch (e) {
            throw (e);
        }
    };
};

export const likeBlog = (blog) => {
    return async (dispatch) => {
        try {
            const updatedBlog = (await blogService.updateBlog(blog)).data;
            dispatch({
                type: blogActions.UPDATE_BLOG,
                data: {
                    updatedBlog
                }
            });
        } catch (e) {
            throw e;
        }
    };
};

export const addCommentToBlog = (blogWithNewComment) => {
    return async (dispatch) => {
        try {
            const updatedBlog = (await blogService.updateBlog(blogWithNewComment)).data;
            dispatch({
                type: blogActions.UPDATE_BLOG,
                data: {
                    updatedBlog
                }
            });

            return updatedBlog;
        } catch (e) {
            throw e;
        }
    };
};

export default {
    addBlog,
    deleteBlog,
    likeBlog,
    initBlogs,
    addCommentToBlog
};