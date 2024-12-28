import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import { CartItem } from "../Utils/types";

type StoreContextProviderType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

const StoreContext = createContext<StoreContextProviderType | undefined>(
  undefined
);

export const useStore = (): StoreContextProviderType => {
  const conext = useContext(StoreContext);
  if (!conext) {
    throw new Error("Context not found");
  }
  return conext;
};

interface StoreContextProviderProps {
  children: ReactNode;
}

const StoreContextProvider: React.FC<StoreContextProviderProps> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  return (
    <StoreContext.Provider value={{ cart, setCart }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
