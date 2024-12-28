import React, { createContext, ReactNode, useContext, useState } from "react";
import { CartItem, FavoriteItem } from "../Utils/types";

type StoreContextProviderType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  favourites: FavoriteItem[];
  setFavourites: React.Dispatch<React.SetStateAction<FavoriteItem[]>>;
  addToCart: (value: CartItem) => void;
  removeFromCart: (id: string) => void;
  addToFavourites: (value: FavoriteItem) => void;
  removeFavourite: (id: string) => void;
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

  const addToCart = (value: CartItem) => {
    const findItem = cart.find((item) => item.id === value.id);
    if (!findItem) {
      setCart((prev) => [...prev, value]);
    } else {
      console.log("Already in the cart");
    }
  };

  const removeFromCart = (id: string) => {
    const removedItemArr = cart.filter((value) => value.id !== id);
    setCart(removedItemArr);
  };

  const addToFavourites = (value: FavoriteItem) => {
    const findItem = favourites.find((item) => item.id === value.id);
    if (!findItem) {
      setFavourites((prev) => [...prev, value]);
    } else {
      console.log("already in favourites");
    }
  };

  const removeFavourite = (id: string) => {
    let removedFav = favourites.filter((item) => item.id !== id);
    setFavourites(removedFav);
  };
  return (
    <StoreContext.Provider
      value={{
        cart,
        setCart,
        favourites,
        setFavourites,
        addToCart,
        removeFromCart,
        addToFavourites,
        removeFavourite,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
