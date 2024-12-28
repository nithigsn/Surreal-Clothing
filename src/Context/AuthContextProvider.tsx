import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextProviderInterface {
  auth: Boolean | string;
  setAuth: Dispatch<React.SetStateAction<Boolean | string>>;
}

const AuthContext = createContext<AuthContextProviderInterface | undefined>(
  undefined
);

export const useAuth = (): AuthContextProviderInterface => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Context not found");
  }
  return context;
};

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [auth, setAuth] = useState<Boolean | string>((): string => {
    const savedAuth = localStorage.getItem("auth");
    return savedAuth ? JSON.parse(savedAuth) : false;
  });

  console.log(auth);
  
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
