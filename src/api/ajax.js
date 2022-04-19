import axios from 'axios'
import {BASE_URL} from "../config";


const instance = axios.create(
  {
    timeout: 10000,
    baseURL: BASE_URL
  }
)

// Add a request interceptor
instance.interceptors.request.use(
  config => {
    const token = JSON.parse(localStorage.getItem('token'))
    if(token) config.headers.Authorization = token
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error.message)
  }
);

export default instance