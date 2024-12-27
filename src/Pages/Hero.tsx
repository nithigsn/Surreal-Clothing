import React from "react";
import MaleHero from "./MaleHero";
import FemaleHero from "./FemaleHero";

const Hero: React.FC = () => {
  let date: Date = new Date();

  return (
    <div className="flex flex-col items-center w-full h-full ">
      <div className="flex flex-col w-[90vw] h-screen pt-16">
        <p className="text-end pt-5">{date.toDateString()}</p>
        <div className="flex justify-center w-full pt-16 h-[400px]">
          <img
            src="https://res.cloudinary.com/dcfwaszea/image/upload/v1734196741/51_1_23bf5d9e-3ef1-4cc2-a197-6beccdd3d6aa_eriyuz.webp"
            alt=""
            className="rounded-2xl h-[350px] w-[325px]  object-cover"
          />
        </div>
        <div className="flex flex-col w-full pt-8">
          <p className="text-center text-2xl">Buy the most comfort clothes</p>
          <p className="text-xs text-center pt-4">
            "Step into style! Explore our curated collection of trendy outfits
            and wardrobe essentials designed to elevate your look for every
            occasion. Your next favorite fit is just a click away!"
          </p>
          <div className="flex w-full h-[100px] justify-center  items-center">
            <button className="w-36 h-8 rounded-full border text-black bg-white ">
              Explore
            </button>
          </div>
        </div>
        
      </div>
      <MaleHero/>
      <FemaleHero/>
    </div>
  );
};

export default Hero;
