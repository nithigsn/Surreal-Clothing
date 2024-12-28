import React, { createContext, ReactNode, useContext, useState } from "react";
import { CartItem, FavoriteItem } from "../Utils/types";

type StoreContextProviderType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  favourites: FavoriteItem[];
  setFavourites: React.Dispatch<React.SetStateAction<FavoriteItem[]>>;
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
  const [favourites, setFavourites] = useState<FavoriteItem[]>([]);
  return (
    <StoreContext.Provider value={{ cart, setCart, favourites,setFavourites }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
