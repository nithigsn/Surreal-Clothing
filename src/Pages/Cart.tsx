import React from "react";
import { useStore } from "../Context/StoreContextProvider";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const { cart, removeFromCart, favourites, addToFavourites, removeFavourite } =
    useStore();

  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/hoodie/${id}`);
  };

  const PRICE = cart.reduce((acc, Total) => acc + Total.price, 0);
  return (
    <div className="w-full h-full flex justify-center pt-10 pb-10">
      <div className="flex flex-col items-center w-[90vw] h-full pt-5">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center h-screen gap-y-5 ">
            <iframe
              src="https://lottie.host/embed/f3fc1d9a-80a4-4d90-b507-cb693b47bf29/kFrjoUZanf.lottie"
              className="h-[500px]"
            ></iframe>
            <p>Ohh shirt! Your cart is empty</p>
            <button className="w-28 h-8 bg-white text-black rounded-full">
              Explore
            </button>
          </div>
        ) : (
          <div className="flex justify-center  gap-2 flex-wrap w-[90vw] lg:w-[80vw]">
            {cart.map((value, index) => {
              return (
                <div
                  className="flex flex-col w-[48%] h-[240px] lw:h-[260px] mdd:h-[300px] sm:h-[340px] p-2 cursor-pointer bg-[#151515] justify-around 
                          md:w-[260px]"
                  key={index}
                 
                >
                  {favourites.find((item) => item.id === value.id) ? (
                    <i
                      className="fa-solid fa-heart right-0 text-end text-red-500"
                      onClick={() => removeFavourite(value.id)}
                    ></i>
                  ) : (
                    <i
                      className="fa-solid fa-heart right-0 text-end"
                      onClick={() => addToFavourites(value)}
                    ></i>
                  )}
                  <div className="flex justify-center relative w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px]">
                    <img
                      src={value.image}
                      alt={value.name}
                      srcSet=""
                      className="object-contain"
                      onClick={() => handleNavigate(value.id)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <p>{value.name}</p>
                    <p className="text-xs text-[#a7a4a4]">Rs.{value.price}</p>
                  </div>

                 <div className="flex justify-center w-full">
                 <button
                    className="w-[100px] text-xs  h-4 bg-white text-black rounded-full"
                    onClick={() => removeFromCart(value.id)}
                  >
                    Remove
                  </button>
                 </div>
                </div>
              );
            })}
          </div>
        )}

        {cart.length > 0 && (
          <div className="flex w-32 h-8 bg-white text-black items-center justify-center mt-5">
            <p className="text-sm">Buy Total Rs.{PRICE}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
