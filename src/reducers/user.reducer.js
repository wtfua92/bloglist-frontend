const initialState = {
    users: [
        {
            username: 'user1',
            name: 'User 1',
            id: 'user1',
            blogs: ['blog1']
        },
        {
            username: 'user2',
            name: 'User 2',
            id: 'user2',
            blogs: ['blog2']
        },
        {
            username: 'wtfua92',
            name: 'Andrii Tynok',
            id: 'user3',
            blogs: []
        }
    ],
    currentUser: {
        username: 'wtfua92',
        id: 'user3',
        token: '123',
        name: 'Andrii Tynok',
        blogs: []
    }
};

const reducer = (state = initialState, { type, data }) => {
    switch (type) {
    case 'USER_LOGIN': {
        return { ...state, currentUser: data };
    }
    case 'USER_LOGOUT': {
        return { ...state, currentUser: initialState.currentUser };
    }
    case 'SET_USER_FORM_FIELD': {
        return {
            ...state,
            currentUser: {
                ...state.currentUser,
                ...data
            }
        };
    }
    case 'USER_ADD_BLOG': {
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
    case 'USER_REMOVE_BLOG': {
        const newUsers = state.users.map((u) => {
            if (u.id === state.currentUser.id) {
                u.blogs = u.blogs.filter(b => b !== data.blogId);
            }
            return u;
        });
        console.log(newUsers);
        return {
            users: newUsers,
            currentUser: { ...state.currentUser, blogs: state.currentUser.blogs.filter(b => b !== data.blogId) }
        };
    }
    default:
        return state;
    }
};

export default reducer;