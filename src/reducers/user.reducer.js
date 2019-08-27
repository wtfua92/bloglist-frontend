export const userActions = {
    INIT_USERS: 'INIT_USERS',
    USER_LOGIN: 'USER_LOGIN',
    USER_LOGOUT: 'USER_LOGOUT',
    SET_USER_FORM_FIELD: 'SET_USER_FORM_FIELD',
    USER_ADD_BLOG: 'USER_ADD_BLOG',
    USER_REMOVE_BLOG: 'USER_REMOVE_BLOG'
};

const initialState = {
    users: [],
    currentUser: {
        username: '',
        password: '',
        token: ''
    }
};

const reducer = (state = initialState, { type, data }) => {
    switch (type) {
    case userActions.INIT_USERS: {
        return { ...state, users: data.users };
    }
    case userActions.USER_LOGIN: {
        return { ...state, currentUser: data };
    }
    case userActions.USER_LOGOUT: {
        return { ...state, currentUser: initialState.currentUser };
    }
    case userActions.SET_USER_FORM_FIELD: {
        return {
            ...state,
            currentUser: {
                ...state.currentUser,
                ...data
            }
        };
    }
    case userActions.USER_ADD_BLOG: {
        const newUsers = state.users.map((u) => {
            if (u.id === state.currentUser.id) {
                u.blogs.push(data.blogId);
            }
            return u;
        });
        return {
            users: newUsers,
            currentUser: { ...state.currentUser, blogs: [...state.currentUser.blogs, data.blogId] }
        };
    }
    case userActions.USER_REMOVE_BLOG: {
        const newUsers = state.users.map((u) => {
            if (u.username === state.currentUser.username) {
                u.blogs = u.blogs.filter(b => b !== data.blogId);
            }
            return u;
        });
        return {
            ...state,
            users: newUsers
        };
    }
    default:
        return state;
    }
};

export default reducer;