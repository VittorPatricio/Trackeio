import React, { createContext, useState, ReactNode, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext<any>(null);

export interface User {
  avatar: string;
  name: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({
    avatar: "",
    name: "",
  });

  useEffect(() => {
    AsyncStorage.getItem('user').then((user) => {
      if (user) {
        setUser(JSON.parse(user));
      }
    });
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};