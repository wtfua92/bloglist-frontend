export const userLogin = ({ username, id, token }) => ({
    type: 'USER_LOGIN',
    data: {
        username,
        id,
        token
    }
});

export const userLogout = () => ({
    type: 'USER_LOGOUT'
});

export const userAddBlog = (blogId) => ({
    type: 'USER_ADD_BLOG',
    data: {
        blogId
    }
});

export const userRemoveBlog = (blogId) => ({
    type: 'USER_REMOVE_BLOG',
    data: {
        blogId
    }
});

export const setUserFormField = (newField) => ({
    type: 'SET_USER_FORM_FIELD',
    data: {
        ...newField
    }
});


export default {
    userLogin,
    userLogout,
    setUserFormField,
    userAddBlog,
    userRemoveBlog
};