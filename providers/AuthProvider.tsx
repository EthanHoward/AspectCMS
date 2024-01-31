import React, { FC, createContext, useContext, useState } from "react";

export interface AuthContextType {
  user: {} | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [jwt, setJWT] = useState<string | null>(null); // JWT set in cookies and used in header of posts for user actions
  const [user, setUser] = useState<{} | null>(null);

  

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider, useAuth };