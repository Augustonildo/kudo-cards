import { apiProvider } from './provider';

const getKudos = () => {
  const path = `kudos`;
  return apiProvider.get(path);
};

const postKudos = (body) => {
  const path = `kudo`;
  return apiProvider.post(path, body);
};

const getUsers = () => {
  const path = `users`;
  return apiProvider.get(path);
};

const signIn = (body) => {
  const path = 'sign-in';
  return apiProvider.post(path, body);
};

const createUser = (body) => {
  const path = 'user';
  return apiProvider.post(path, body);
};

export const apiTasks = { getKudos, signIn, createUser, postKudos, getUsers };
