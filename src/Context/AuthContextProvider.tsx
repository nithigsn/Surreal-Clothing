import React, { createContext, Dispatch, ReactNode, useContext, useState } from "react";

interface AuthContextProviderInterface {
  auth: Boolean;
  setAuth: Dispatch<React.SetStateAction<Boolean>>;
}

const AuthContext = createContext<AuthContextProviderInterface | undefined>(
  undefined
);

export const useAuth = ():AuthContextProviderInterface =>{
    const context=useContext(AuthContext);
    if (!context) {
        throw new Error("Context not found");
    }
    return context;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [auth, setAuth] = useState<Boolean>(false);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

