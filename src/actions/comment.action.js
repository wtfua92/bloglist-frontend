export const setCommentField = (value) => ({
    type: 'SET_COMMENT_FIELD',
    data: value
});

export const clearCommentField = () => ({
    type: 'CLEAR_COMMENT_FIELD'
});

export default {
    clearCommentField,
    setCommentField
};