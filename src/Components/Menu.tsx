import React from "react";

const Menu: React.FC = () => {
  return (
    <div className="flex w-screen justify-center left-0 top-16 absolute lg:w-[500px]">
      <div className="flex flex-col justify-center items-center text-white bg-[#0B0B0B] z-50 rounded-2xl w-[90vw] h-[150px]">
        <div className="flex items-center justify-evenly w-full h-14">
          <img src="" alt="" srcSet="" />
          <p>Men</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
        <div className="flex items-center justify-evenly w-full h-14">
          <img src="" alt="" srcSet="" />
          <p>Women</p>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Menu;
