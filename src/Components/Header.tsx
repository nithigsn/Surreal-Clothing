import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Context/StoreContextProvider";

const Header: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);

  const navigate = useNavigate();
  const {cart}=useStore();

  return (
    <div className="w-screen h-16 flex justify-center fixed z-50 ">
      <div className="flex items-center justify-between w-[90vw] ">
        <div
          className="flex items-center justify-center size-10  rounded-full cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          <i
            className={` fa-solid ${menu ? " fa-x" : "fa-bars"} text-white `}
          ></i>
        </div>
        {menu && (
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
        )}
        <div className="flex items-center justify-around w-40 h-10  rounded-full cursor-pointer">
          <div className="flex justify-center items-center size-[35px] rounded-full">
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="flex justify-center items-center size-[35px] rounded-full"
          onClick={()=>setSearch((prev)=>!prev)}>
            <i className="fa-solid fa-search"></i>
          </div>
          <div
            className="flex justify-center items-center size-[35px] rounded-full"
            onClick={() => navigate("/favourites")}
          >
            <i className="fa-solid fa-heart text-red-500"></i>
          </div>

          {search && (
            <div className="flex w-full justify-center absolute left-0 top-3">
              <div className="flex justify-evenly items-center w-[90vw]  h-10 bg-white absolute z-30 rounded-3xl">
                <i className="fa-solid fa-search text-black pl-5 pr-5"></i>
                <input
                  type="text"
                  name="Search"
                  placeholder="Search"
                  className="w-[90vw] rounded-3xl text-black border-none outline-none "
                />
                <i
                  className="fa-solid fa-x text-black pr-4"
                  onClick={() => setSearch((prev) => !prev)}
                ></i>
              </div>
            </div>
          )}
          <div
            className="flex justify-center items-center size-[35px] rounded-full"
            onClick={() => navigate("/cart")}
          >
            <i className="fa-solid fa-bag-shopping"></i>
            <p className="pl-1">{cart.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
