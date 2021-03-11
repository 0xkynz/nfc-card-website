/* eslint-disable no-undef */
import axios from 'axios';
import { getToken } from './auth';
import { toast } from 'react-toastify';

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:3000', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    const token = getToken();
    if (token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = getToken();
    }
    return config;
  },
  (error) => {
    // do something with request error
    // console.log(error); // for debug
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    // Do something with response error
    if (error.response.status === 400) {
      const {
        response: {
          data: { message },
        },
      } = error;
      toast.error(message);
    }
    return Promise.reject(error.response);
  }
);

export default service;
