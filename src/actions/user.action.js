import { userActions } from '../reducers/user.reducer';
import userService from '../services/user.service';
import authService from '../services/authentication.service';

export const initUsers = () => {
  return async (dispatch) => {
    let users = [];
    try {
      users = await userService.getAll();
    } catch (e) {
      console.log(e);
    }

    dispatch({
      type: userActions.INIT_USERS,
      data: {
        users
      }
    });
  };
};

export const userLogin = (userData) => {
  return async (dispatch) => {
    let user = {};
    try {
      user = await authService.userLogin(userData);
      dispatch({
        type: userActions.USER_LOGIN,
        data: {
          ...user
        }
      });
      authService.saveUserData(user);
    } catch (e) {
      throw e;
    }
    return user;
  };
};

export const userLogout = () => ({
  type: userActions.USER_LOGOUT
});

export const userAddBlog = (blogId) => ({
  type: userActions.USER_ADD_BLOG,
  data: {
    blogId
  }
});

export const userRemoveBlog = (blogId) => ({
  type: userActions.USER_REMOVE_BLOG,
  data: {
    blogId
  }
});

export const setUserFormField = (newField) => ({
  type: userActions.SET_USER_FORM_FIELD,
  data: {
    ...newField
  }
});


export default {
  userLogin,
  userLogout,
  setUserFormField,
  userAddBlog,
  userRemoveBlog,
  initUsers
};