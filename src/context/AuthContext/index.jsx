import React, { createContext, useContext, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getLocalUser, setLocalUser } from '../../controllers/userController';

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(getLocalUser);
  const [isAuth, setIsAuth] = useState(() => Boolean(getLocalUser()));

  function saveUser(newUser) {
    setUser(newUser);
    setLocalUser(newUser);
    setIsAuth(true);
  }

  return (
    <AuthContext.Provider value={{ user, setUser: saveUser, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
}

export function RedirectAuth({ children }) {
	const { isAuth } = useAuth();
	const location = useLocation();

  return isAuth
    ? <Navigate to='/prestadores' state={{ from: location }} replace />
    : children;
}

export function RequireAuth({ children }) {
	const { isAuth } = useAuth();
	const location = useLocation();

  return !isAuth
    ? <Navigate to='/' state={{ from: location }} replace />
    : children;
}
