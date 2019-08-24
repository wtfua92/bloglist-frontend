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

export const setUserFormField = (newField) => ({
    type: 'SET_USER_FORM_FIELD',
    data: {
        ...newField
    }
});


export default {
    userLogin,
    userLogout,
    setUserFormField
};