import { createContext, useEffect, useState } from 'react';
import { apiTasks } from '../services/api';

export const UserContext = createContext({
  users: [],
});

export default function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    apiTasks
      .getUsers()
      .then((res) =>
        setUsers(
          res.data.content?.map(({ email, name }) => {
            return {
              value: email,
              label: name,
            };
          })
        )
      )
      .catch((error) => console.error('Error getting users', error));
  }, []);

  return <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>;
}
