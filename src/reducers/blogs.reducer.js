export const blogActions = {
  ADD_BLOG: 'ADD_BLOG',
  DELETE_BLOG: 'DELETE_BLOG',
  UPDATE_BLOG: 'UPDATE_BLOG',
  INIT_BLOGS: 'INIT_BLOGS',
};

const reducer = (state = [], { type, data }) => {
  switch (type) {
  case blogActions.INIT_BLOGS: {
    return data.blogs;
  }
  case blogActions.ADD_BLOG:
    return [...state, { ...data.newBlog, likes: 0 }];
  case blogActions.DELETE_BLOG:
    return state.filter(b => b.id !== data.blogId);
  case blogActions.UPDATE_BLOG: {
    return state.map(b => {
      console.log(data.updatedBlog);
      if (b.id === data.updatedBlog.id) {
        b = data.updatedBlog;
      }
      return b;
    });
  }
  default:
    return state;
  }
};

export default reducer;