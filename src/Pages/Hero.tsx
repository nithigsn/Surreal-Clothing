import React from "react";
import MaleHero from "./MaleHero";
import FemaleHero from "./FemaleHero";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate=useNavigate();

  return (
    <div className="flex flex-col items-center w-full h-full ">
      <div className="flex flex-col w-[90vw] h-screen pt-16 bg-[url()]">
        <div className="flex justify-center w-full bg-white h-[500px] mt-5" >
          <img
            src="https://res.cloudinary.com/dcfwaszea/image/upload/v1735359210/hmgoepprod_1_ednezm.jpg"
            alt=""
            className="rounded-2xl h-[500px] w-[325px] object-contain"
          />
        </div>
        <div className="flex flex-col items-center w-full pt-4 gap-y-3">
          <p className="text-center text-2xl">Buy the most comfort clothes</p>
          <p className="text-xs text-center  w-[70vw] ">
            "Step into style! Explore our curated collection of trendy outfits
            and wardrobe essentials designed to elevate your look for every
            occasion. Your next favorite fit is just a click away!"
          </p>
          <div className="flex w-full h-[50px] justify-center  items-center">
            <button className="w-36 h-8 rounded-full border text-black bg-white " onClick={()=>navigate('/explore')}>
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
