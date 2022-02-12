import axios from 'axios';
import useSWR from 'swr';

export default function useKudos() {
  const { data, loading, error, mutate } = useSWR('/kudos');

  const createKudo = (body) => {
    axios
      .post('kudo', body)
      .then(() => mutate())
      .catch((e) => console.error(e));
  };

  return {
    createKudo,
    kudos: data,
    kudosError: error,
    mutateKudos: mutate,
    kudosLoading: loading,
  };
}
