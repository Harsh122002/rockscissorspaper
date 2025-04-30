import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user-login');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (username, password) => {
    const storedUser = JSON.parse(localStorage.getItem('user-game'));
       if (storedUser && storedUser.name === username && storedUser.password === password) {
         localStorage.setItem('user-login', JSON.stringify(storedUser));
      setUser({ name: username });
      return true;
    }
    return false;
  };

  const logout = () => {
       setUser(null);
     localStorage.removeItem('user-login');
  };

  const register = (name, password) => {
    localStorage.setItem('user-game', JSON.stringify({ name, password }));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
