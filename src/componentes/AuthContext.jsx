

import React, { createContext, useState } from 'react';

// Creamos el contexto
export const AuthContext = createContext();

// Componente de proveedor de contexto
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    
  };

  if (isLoggedIn) {
    console.log("La sesión está iniciada oauth");
} else {
    console.log("La sesión no está iniciada oauth");
}

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};


