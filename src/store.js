import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import blogsReducer from './reducers/blogs.reducer';
import notificationReducer from './reducers/notification.reducer';
import userReducer from './reducers/user.reducer';
import createBlogFormReducer from './reducers/createBlogForm.reducer';
import toggleVisibilityReducer from './reducers/togglable.reducer';
import commentReducer from './reducers/comment.reducer';

const reducers = combineReducers({
  blogs: blogsReducer,
  notification: notificationReducer,
  users: userReducer,
  createBlogForm: createBlogFormReducer,
  createBlogFormVisibility: toggleVisibilityReducer,
  comment: commentReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducers, enhancer);

export default store;