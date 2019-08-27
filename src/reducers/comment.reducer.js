export default (state = '', { type, data }) => {
  switch (type) {
  case 'SET_COMMENT_FIELD':
    return data;
  case 'CLEAR_COMMENT_FIELD':
    return '';
  default:
    return state;
  }
};