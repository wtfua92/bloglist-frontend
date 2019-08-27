const initialState = {
  title: '',
  author: '',
  url: ''
};

const reducer = (state = initialState, { type, data }) => {
  switch (type) {
  case 'CREATE_BLOG_SET_FIELD': {
    return { ...state, ...data };
  }
  case 'CREATE_BLOG_CLEAR_ALL':
    return initialState;
  default:
    return state;
  }
};

export default reducer;