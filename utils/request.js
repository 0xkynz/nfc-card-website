/* eslint-disable no-undef */
import axios from 'axios';
import { getToken } from './auth';

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

export default service;
