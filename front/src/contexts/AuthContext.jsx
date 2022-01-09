import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({
  logout: () => {},
  authenticate: () => {},
  isAuthenticated: false,
  getLoggedUser: () => {},
});

AuthContext.displayName = 'AuthContext';

export function AuthProvider({ children }) {
  const localToken = localStorage.getItem('token');
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => Boolean(localToken?.length) ?? false
  );

  function authenticate({ token, userInfo }) {
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
    localStorage.setItem('user', userInfo);
  }

  function logout() {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  function getLoggedUser() {
    return localStorage.getItem('user');
  }

  return (
    <AuthContext.Provider value={{ authenticate, isAuthenticated, getLoggedUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be within its context');
  }
  return context;
}
