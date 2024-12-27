/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { usuarios } from '../utils/variables';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    const dynamicUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Unificar estructuras
    const formattedDynamicUsuarios = dynamicUsuarios.map(usuario => ({
        ...usuario,
        productos: usuario.productos || []
    }));

    // Combinar usuarios estáticos y dinámicos
    const allUsuarios = [...usuarios, ...formattedDynamicUsuarios];

    const usuarioEncontrado = allUsuarios.find(
        (usuario) =>
            usuario.email.toLowerCase() === email.toLowerCase() &&
            usuario.contrasenia === password
    );

    if (usuarioEncontrado) {
        setUser(usuarioEncontrado);
        localStorage.setItem('user', JSON.stringify(usuarioEncontrado));
    } else {
        alert('Usuario o contraseña incorrectos');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
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
