import React from "react";
import MaleHero from "./MaleHero";
import FemaleHero from "./FemaleHero";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full h-full ">
      <div className="flex flex-col w-[90vw] h-screen justify-end">
        <img
          src="https://res.cloudinary.com/dcfwaszea/image/upload/v1735359210/hmgoepprod_1_ednezm.jpg"
          alt=""
          className="h-screen w-full object-cover absolute left-0 top-0 opacity-75"
        />
        <div className="flex flex-col w-full items-center h-96 z-10">
         <h2 className="text-3xl font-bold">WINTER SALE IS LIVE</h2>
         <p>Upto 60% Off</p>

        </div>
        <div className="flex justify-between h-24 w-full z-10">
          <p className="" onClick={()=>navigate('/explore')}>Shop for Him</p>
          <p className="">Shop for Her</p>
        </div>
      </div>
      <MaleHero />
      <FemaleHero />
    </div>
  );
};

export default Hero;
