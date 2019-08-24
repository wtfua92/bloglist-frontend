export const blogActions = {
    ADD_BLOG: 'ADD_BLOG',
    DELETE_BLOG: 'DELETE_BLOG',
    LIKE_BLOG: 'LIKE_BLOG',
    CHANGE_DETAILS_VISIBILITY: 'CHANGE_DETAILS_VISIBILITY'
};

const initialState = [
    {
        title: 'Blog 1',
        id: '1',
        author: 'Author 1',
        url: 'http://url1.com',
        likes: 1,
        user: {
            username: 'user1'
        },
        details: true
    },
    {
        title: 'Blog 2',
        id: '2',
        author: 'Author 2',
        url: 'http://url2.com',
        likes: 2,
        user: {
            username: 'user2'
        },
        details: false
    }
];

const reducer = (state = initialState, { type, data }) => {
    switch (type) {
    case blogActions.ADD_BLOG:
        return [...state, data.newBlog];
    case blogActions.DELETE_BLOG:
        return [...state.slice(0, data.index), ...state.slice(data.index + 1)];
    case blogActions.LIKE_BLOG: {
        const newState = [ ...state ];
        newState[data.index].likes += 1;
        return newState;
    }
    case blogActions.CHANGE_DETAILS_VISIBILITY: {
        const newState = [...state];
        newState[data.index].details = !newState[data.index].details;
        return newState;
    }
    default:
        return state;
    }
};

export default reducer;