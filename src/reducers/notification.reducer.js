const initialState = {
    message: '',
    timer: null,
    type: ''
};

const reducer = (state = initialState, { type, data }) => {
    switch (type) {
    case 'SET_NOTIFICATION': {
        clearTimeout(state.timer);
        return data;
    }
    case 'CLEAR_NOTIFICATION': {
        clearTimeout(state.timer);
        return initialState;
    }
    default:
        return state;
    }
};

export default reducer;