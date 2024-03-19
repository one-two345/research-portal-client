// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email) => {
    // For simplicity, consider any non-empty username/password as a successful login
    if (email) {
      // Set the user object with username and a dynamically generated email
      setUser({email: email });
    } else {
      // If login fails, you may want to handle it accordingly
      console.error('Login failed');
    }
  };

 

  return (
    <AuthContext.Provider value={{ user, login,}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};
