import React from "react";
import { useStore } from "../Context/StoreContextProvider";
import { useNavigate } from "react-router-dom";

const Favourites: React.FC = () => {
  const { favourites,addToFavourites,removeFavourite } = useStore();
  const navigate = useNavigate();
  const handleNavigate = (id: string) => {
    navigate(`/hoodie/${id}`);
  };
  return (
    <div className="w-full h-full flex justify-center pt-10 pb-10">
      <div className="flex flex-col items-center w-[90vw] h-full pt-5">
        {favourites.length === 0 ? (
          <div className="flex flex-col items-center h-screen gap-y-5 ">
            <iframe
              src="https://lottie.host/embed/f3fc1d9a-80a4-4d90-b507-cb693b47bf29/kFrjoUZanf.lottie"
              className="h-[500px]"
            ></iframe>
            <p>Ohh Shirt ? How about Oversized T-shirt !!</p>
            <button className="w-36 h-8 bg-white text-black rounded-full">
              Search your favs..
            </button>
          </div>
        ) : (
          <div className="flex justify-center gap-2 flex-wrap w-[90vw] lg:w-[80vw]">
            {favourites.map((value, index) => {
              return (
                <div
                  className="flex flex-col w-[48%] h-[240px] lw:h-[260px] mdd:h-[300px] sm:h-[340px] p-2 cursor-pointer bg-[#151515] justify-around 
                          md:w-[260px]"
                  key={index}
                  onClick={() => handleNavigate(value.id)}
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
        )}
      </div>
    </div>
  );
};

export default Favourites;
