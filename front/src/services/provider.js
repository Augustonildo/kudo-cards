import axios from "axios";
import { handleResponse, handleError } from "./response";

const BASE_URL = "https://1a89l59dfb.execute-api.us-east-1.amazonaws.com";

const get = (resource) => {
  return axios
    .get(`${BASE_URL}/${resource}`)
    .then(handleResponse)
    .catch(handleError);
};

const post = (resource, body) => {
  return axios
    .post(`${BASE_URL}/${resource}`, body)
    .then(handleResponse)
    .catch(handleError);
};

const put = (resource, body) => {
  return axios
    .put(`${BASE_URL}/${resource}`, body)
    .then(handleResponse)
    .catch(handleError);
};

const remove = (resource, id) => {
  return axios
    .delete(`${BASE_URL}/${resource}`, id)
    .then(handleResponse)
    .catch(handleError);
};

export const apiProvider = {
  get,
  post,
  put,
  remove,
};
