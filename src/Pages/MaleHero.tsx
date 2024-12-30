import React from "react";
import { useNavigate } from "react-router-dom";

const MaleHero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center w-full h-screen mt-10 mb-10">
      <div className="flex  w-[90vw] h-screen justify-center absolute">
        <img
          src="https://res.cloudinary.com/dcfwaszea/image/upload/v1735313080/Brown_Hoodie_HM_tqemmi.jpg"
          alt="Man Image"
          srcSet=""
          className="object-cover opacity-85"
        />
        <img
          src="https://res.cloudinary.com/dcfwaszea/image/upload/v1735359210/Brown_Hoodie_HM_1_y05tpw.jpg"
          alt="Man Image"
          srcSet=""
          className="object-cover opacity-85 hidden lg:block"
        />

        <div className="flex w-full flex-col items-center absolute top-1/2 gap-2   ">
          <h4 className="text-3xl">NEW ENERGY</h4>
          <button
            className="w-32 h-8 bg-white text-black rounded-full"
            onClick={() => navigate("/explore")}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaleHero;
