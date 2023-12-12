// AuthContext.js

import React, { useContext, useEffect, useState } from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [authState, setAuthState] = useState({ user, isAuthenticated });

  useEffect(() => {
    setAuthState({ user, isAuthenticated });
  }, [user, isAuthenticated]);

  const login = () => loginWithRedirect();
  const logoutUser = () => logout({ returnTo: window.location.origin });

  return (
    <AuthContext.Provider value={{ ...authState, login, logout: logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
