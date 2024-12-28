import React from "react";
import { Products } from "../Utils/Products";

const Explore: React.FC = () => {
  return (
    <div className="flex justify-center w-full h-full pt-20 pb-16">
      <div className="flex justify-center gap-2 flex-wrap w-[90vw] lg:w-[70vw]">
        {Products.map((value, index) => {
          return (
            <div
              className="flex flex-col justify-around w-[160px] h-[260px] bg-[#0a0a0a] p-2 cursor-pointer
              bsm:w-[250px] bsm:h-[300px]"
              key={index}
            >
              <div className="flex relative w-full h-[200px] bsm:h-[220px]">
                <i className="fa-solid fa-heart right-0 absolute"></i>
                <img
                  src={value.image}
                  alt={value.name}
                  srcSet=""
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <p>{value.name}</p>
                <p className="text-xs text-[#a7a4a4]">Rs.{value.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
