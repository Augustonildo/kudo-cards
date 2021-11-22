import axios from 'axios';

// const BASE_URL = 'http://localhost:3000';
const BASE_URL = "https://1a89l59dfb.execute-api.us-east-1.amazonaws.com";

const get = (resource, handleResponse = {}, handleError = {}) => {
  return axios.get(`${BASE_URL}/${resource}`).then(handleResponse).catch(handleError);
};

const post = (resource, body, handleResponse = {}, handleError = {}) => {
  return axios.post(`${BASE_URL}/${resource}`, body).then(handleResponse).catch(handleError);
};

const put = (resource, body, handleResponse = {}, handleError = {}) => {
  return axios.put(`${BASE_URL}/${resource}`, body).then(handleResponse).catch(handleError);
};

const remove = (resource, id, handleResponse = {}, handleError = {}) => {
  return axios.delete(`${BASE_URL}/${resource}`, id).then(handleResponse).catch(handleError);
};

export const apiProvider = {
  get,
  post,
  put,
  remove,
};
