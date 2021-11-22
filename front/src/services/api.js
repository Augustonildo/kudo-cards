import { apiProvider } from './provider';

const getKudos = () => {
  let barramento = `kudos`;
  return apiProvider.get(barramento);
};

const postKudos = (body) => {
  let barramento = `kudo`;
  return apiProvider.post(barramento, body);
};

export const apiTasks = { getKudos, postKudos };
