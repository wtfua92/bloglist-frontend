import axios from 'axios';
const baseUrl = '/api/login';

const localStorageKey = 'blogsAppLoggedInUser';

const saveUserData = (userData) => {
  window.localStorage.setItem(localStorageKey, JSON.stringify(userData));
};

const getToken = () => JSON.parse(window.localStorage.getItem(localStorageKey)).token;

const getUserData = () => {
  const userData = JSON.parse(window.localStorage.getItem(localStorageKey));
  if (userData) {
    delete userData.token;
  }
  return userData;
};

const removeUserData = () => {
  window.localStorage.removeItem(localStorageKey);
};

const userLogin = (user) => {
  const request = axios.post(baseUrl, user);
  return request.then(response => response.data);
};

export default {
  userLogin,
  getToken,
  getUserData,
  saveUserData,
  removeUserData
};