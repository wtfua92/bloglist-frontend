export const toggleVisibility = () => ({
  type: 'TOGGLE_VISIBILITY'
});

export default (state = false, { type }) => {
  if (type === 'TOGGLE_VISIBILITY') {
    return !state;
  }
  return state;
};