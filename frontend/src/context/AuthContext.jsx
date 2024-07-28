import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';



const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ isAuthenticated: false, token: null });
 

  useEffect(() => {
    const checkToken = async () => {
      try {
        const response = await axios('/api/auth/check', {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          setAuthState({ isAuthenticated: true, token: data.token });
        } else {
          setAuthState({ isAuthenticated: false, token: null });
        }
      } catch (error) {
        console.error('Error checking auth status', error);
        setAuthState({ isAuthenticated: false, token: null });
      }
    };

    checkToken();
  }, [])

  return (
    <AuthContext.Provider value={{setAuthState, authState }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
