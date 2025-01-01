import React from "react";
import { useStore } from "../Context/StoreContextProvider";
import { useNavigate } from "react-router-dom";

const SearchResults: React.FC = () => {
  const { favourites, addToFavourites, removeFavourite, searchResults } =
    useStore();
  const navigate = useNavigate();
  const handleNavigate = (id: string) => {
    navigate(`/hoodie/${id}`);
  };



  return (
    <div className="flex justify-center   w-full h-full pt-20 pb-16">
      <div className="flex gap-2 flex-wrap w-[90vw] lg:w-[80vw]">
        {searchResults.length === 0 && (
         <div className="flex w-full">
             <p className="text-white text-center">No results found</p>
         </div>
        )}
        {searchResults.map((value, index) => {
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
              <div
                className="flex justify-center relative w-full h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px]"
                onClick={() => handleNavigate(value.id)}
              >
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
};

export default SearchResults;
