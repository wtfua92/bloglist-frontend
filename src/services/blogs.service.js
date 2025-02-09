import axios from 'axios';
import authService from './authentication.service';

const baseUrl = '/api/blogs';

const getConfig = () => ({
    headers: { Authorization: `Bearer ${authService.getToken()}` || '' }
});

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
};

const createBlog = async (blogData) => {
    return (await axios.post(baseUrl, blogData, getConfig())).data;
};

const updateBlog = async (updatedBlog) => {
    return axios.put(`${baseUrl}/${updatedBlog.id}`, updatedBlog);
};

const deleteBlog = async (id) => {
    return axios.delete(`${baseUrl}/${id}`, getConfig());
};

export default { getAll, createBlog, updateBlog, deleteBlog };