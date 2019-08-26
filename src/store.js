import { createStore, combineReducers } from 'redux';
import blogsReducer from './reducers/blogs.reducer';
import notificationReducer from './reducers/notification.reducer';
import userReducer from './reducers/user.reducer';
import createBlogFormReducer from './reducers/createBlogForm.reducer';
import toggleVisibilityReducer from './reducers/togglable.reducer';

const reducers = combineReducers({
    blogs: blogsReducer,
    notification: notificationReducer,
    users: userReducer,
    createBlogForm: createBlogFormReducer,
    createBlogFormVisibility: toggleVisibilityReducer
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;