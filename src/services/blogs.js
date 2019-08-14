import axios from 'axios'
import authService from './authentication';

const baseUrl = '/api/blogs';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const createBlog = async (blogData) => {
  const config = {
    headers: {Authorization: `Bearer ${authService.getToken()}` || ''}
  };

  return (await axios.post(baseUrl, blogData, config)).data;
};

export default { getAll, createBlog }