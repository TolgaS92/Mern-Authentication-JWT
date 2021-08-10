import axios from 'axios';

const API = axios.create({ baseURL: 'https://mern-authentication-jwt.herokuapp.com' });
/* https://mern-authentication-jwt.herokuapp.com */
/* http://localhost:3000 */
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    signIn: function (formData) {
        return API.post('/users/signin', formData);
    },
    signUp: function (formData) {
        return API.post('/users/signup', formData);
    }
};