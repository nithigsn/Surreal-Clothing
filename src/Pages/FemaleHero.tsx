import React from "react";

const FemaleHero: React.FC = () => {
  return (
    <div className="flex justify-center w-full h-screen mt-2">
      <div className="flex w-[90vw] h-screen justify-center absolute">
        <img
          src="https://res.cloudinary.com/dcfwaszea/image/upload/v1735313081/hmgoepprod_a5kman.jpg"
          alt="Man Image"
          srcSet=""
          className="object-cover opacity-85"
        />
        <div className="flex w-full flex-col items-center absolute top-1/2 gap-2   ">
          <h4 className="text-3xl">NEW ENERGY</h4>
          <button className="w-32 h-8 bg-white text-black rounded-full">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default FemaleHero;
