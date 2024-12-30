import React from "react";
import { Products } from "../Utils/Products";
import { useNavigate } from "react-router-dom";

const Explore: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    navigate(`/hoodie/${id}`);
  };

    return (
      <div className="flex justify-center w-full h-full pt-20 pb-16">
        <div className="flex justify-center  gap-2 flex-wrap w-[90vw] lg:w-[80vw]">
          {Products.map((value, index) => {
            return (
              <div
                className="flex flex-col w-[48%] h-[240px] lw:h-[260px] mdd:h-[300px] sm:h-[340px] p-2 cursor-pointer bg-[#151515] justify-around 
                md:w-[260px]"
                key={index}
                onClick={() => handleNavigate(value.id)}
              >
                <div className="flex justify-center relative w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px]">
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
                <div className="flex pl-4 -space-x-4">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
}
export default Explore;
