const initialState = {
    username: '',
    id: '',
    token: ''
};

const reducer = (state = initialState, { type, data }) => {
    switch (type) {
    case 'USER_LOGIN': {
        return data;
    }
    case 'USER_LOGOUT': {
        return initialState;
    }
    case 'SET_USER_FORM_FIELD': {
        return {
            ...state,
            ...data
        };
    }
    default:
        return state;
    }
};

export default reducer;