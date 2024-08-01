import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // Initialize authUser state
  const [authUser, setAuthUser] = useState(() => {
    const savedUser = localStorage.getItem("User");
    return savedUser ? JSON.parse(savedUser) : undefined;
  });

  // Synchronize localStorage with authUser state
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("User", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("User");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
