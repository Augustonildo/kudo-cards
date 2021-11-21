import { createContext, useEffect, useState } from 'react';
import { apiTasks } from '../services/api';

export const KudoContext = createContext({
  kudos: [],
  addKudo: () => {},
});

export default function KudoProvider({ children }) {
  const [kudos, setKudos] = useState([]);

  useEffect(() => {
    apiTasks
      .getKudos()
      .then((res) => setKudos(res.data.content))
      .catch((error) => console.error('Error getting kudo', error));
  }, []);

  function addKudo(kudo) {
    apiTasks
      .postKudos({
        recipient: kudo.recipient,
        sender: 'TEST_USER',
        message: kudo.message,
      })
      .then((res) => setKudos((prevState) => [...prevState, res.data.content]))
      .catch((error) => console.error('Error inserting kudo', error));
  }

  return <KudoContext.Provider value={{ addKudo, kudos }}>{children}</KudoContext.Provider>;
}
