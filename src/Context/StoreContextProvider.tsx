import React, { createContext, ReactNode, useContext, useState } from "react";
import { CartItem, FavoriteItem, Product } from "../Utils/types";
import { Products } from "../Utils/Products";
import { useNavigate } from "react-router-dom";

type StoreContextProviderType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  favourites: FavoriteItem[];
  setFavourites: React.Dispatch<React.SetStateAction<FavoriteItem[]>>;
  addToCart: (value: CartItem) => void;
  removeFromCart: (id: string) => void;
  addToFavourites: (value: FavoriteItem) => void;
  removeFavourite: (id: string) => void;
  searchResults: Product[];
  setSearchResults: React.Dispatch<React.SetStateAction<Product[]>>;
  searchProduct: (query: string) => void;
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
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const navigate = useNavigate();

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

  const searchProduct = (query: string) => {
    const results = Products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
    navigate("/results");
    if (query === "") {
      setSearchResults([]);
    }
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
        searchResults,
        setSearchResults,
        searchProduct,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
