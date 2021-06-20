import axios from "axios";
import { BASE_URL } from "../constants/baseURl";
import { paramsSerializer } from '../utils/paramsSerializer';

axios.defaults.baseURL = BASE_URL
axios.defaults.paramsSerializer = paramsSerializer;
axios.defaults.withCredentials = false;
axios.defaults.headers = {
  "Content-Type": "application/json",
}

axios.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// axios.interceptors.request.use(
//   config => {
//     // Do something before request is sent
//     config.headers["Authorization"] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1MzE2NzE2NTY1Mjk5NzE5NSIsInVzZXJuYW1lIjoiZG9uYWxkdHJpZXUxMjMiLCJpYXQiOjE2MjM1MTI3MDQsImV4cCI6MTY1NDI3MTEwNH0._Xt_SymwP0v527pCAVPozM4nWx6IQhZM7GP_TXo-HF0';
//     return config;
//   },
//   error => {
//     Promise.reject(error);
//   }
// );

axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

const errorHandler = e => {
  console.log(e);
  console.log('API ERROR', e.response);
  if (e.response && e.response.data && e.response.data.error) {
    return Promise.resolve(e.response.data);
  }
  if (e.response) {
    return Promise.resolve({ error: { code: e.response.status } });
  }
  return Promise.resolve();
};

export const getAPI = (target, params, settings = {}) =>
  axios
    .get(target, {
      ...settings,
      params: params || {},
    })
    .then(resp => Promise.resolve(resp))
    .catch(e => {
      console.log(e);
      console.log(target);
      return errorHandler(e);
    });

export const postAPI = (target, data) =>
  axios
    .post(target, data)
    .then(resp => Promise.resolve(resp))
    .catch(e => {
      console.log(e);
      return errorHandler(e);
    });

export const putAPI = (target, data) =>
  axios
    .put(target, data)
    .then(resp => Promise.resolve(resp))
    .catch(errorHandler);

export const delAPI = (target, data) =>
  axios
    .delete(target, data)
    .then(resp => Promise.resolve(resp))
    .catch(errorHandler);

export const postAPIConfig = (target, data, config) =>
  axios
    .post(target, data, config)
    .then(resp => Promise.resolve(resp))
    .catch(e => {
      console.log(e);
      return errorHandler(e);
    });


export default axios;
