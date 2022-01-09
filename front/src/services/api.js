import { apiProvider } from './provider';

const getKudos = () => {
  let barramento = `kudos`;
  return apiProvider.get(barramento);
};

const postKudos = (body) => {
  let barramento = `kudo`;
  return apiProvider.post(barramento, body);
};

const getUsers = () => {
  let barramento = `users`;
  return apiProvider.get(barramento);
};

export const apiTasks = { getKudos, postKudos, getUsers };
