import axios from 'axios'
const baseUrl = '/api/login';

const userLogin = (user) => {
    const request = axios.post(baseUrl, user);
    return request.then(response => response.data);
};

export default { userLogin }