export const createBlogSetField = (newField) => ({
    type: 'CREATE_BLOG_SET_FIELD',
    data: {
        ...newField
    }
});

export const createBlogClearAll = () => ({
    type: 'CREATE_BLOG_CLEAR_ALL'
});

export default {
    createBlogClearAll,
    createBlogSetField
};