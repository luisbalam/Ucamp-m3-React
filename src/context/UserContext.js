import React, { useState } from 'react';

// Creamos el contexto para el usuario
const UserContext = React.createContext();
// Desestructuramos para obtener el Provider y el Consumer
const { Provider, Consumer } = UserContext;

// Creamos el Componente
const UserProvider = ({ children }) => {
  // Creamos el State
  const [user, setUser] = useState({ token: 'Sin Token' });

  // Agregamos funciones necesarias
  const saveToken = (token) => {
    localStorage.setItem('token', token);
    setUser({ token })
  }

  const clearToken = () => {
    localStorage.clear();
    setUser(null)
  }

  // retornamos el Provider, indicandole los elementos que va a manejar
  return (
    <Provider value={{ user, saveToken, clearToken }}>
      {children}
    </Provider>
  )
};

// Exportamos
export { UserProvider, Consumer as UserConsumer, UserContext }