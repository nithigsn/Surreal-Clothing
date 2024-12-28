import React from "react";
import { useStore } from "../Context/StoreContextProvider";

const Cart: React.FC = () => {
  const { cart } = useStore();
  return (
    <div className="w-full h-full flex justify-center pt-10 pb-10">
      <div className="flex flex-col items-center w-[90vw] h-full pt-5">
        {cart.length === 0 && (
          <div className="flex flex-col items-center h-screen gap-y-5 ">
            <iframe
              src="https://lottie.host/embed/f3fc1d9a-80a4-4d90-b507-cb693b47bf29/kFrjoUZanf.lottie"
              className="h-[500px]"
            ></iframe>
            <p>Your cart is empty</p>
            <button className="w-28 h-8 bg-white text-black rounded-full">
              Explore
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
