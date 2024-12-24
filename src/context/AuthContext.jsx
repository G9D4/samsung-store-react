import React, { createContext, useContext, useState, useEffect } from 'react';
import { usuarios } from '../utils/variables';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.email.toLowerCase() === email.toLowerCase() &&
        usuario.contrasenia === password
    );

    if (usuarioEncontrado) {
      setUser(usuarioEncontrado); 
      localStorage.setItem('user', JSON.stringify(usuarioEncontrado));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
