import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-full  flex justify-center bg-[#111010]  absolute pt-10 lg:pt-20 pb-10">
      <div className="flex flex-col w-[90vw]  gap-y-5 lg:w-[50vw]">
        <div className="flex flex-col w-full gap-y-7 lg:flex-row">
          <div className="flex flex-col w-full gap-y-1 ">
            <h5 className="font-bold pb-2">Shop</h5>
            <p className="text-sm lg:text-xs text-[#C0BABA]">Oversized T-shirt</p>
            <p className="text-sm lg:text-xs text-[#C0BABA]">Hoodies</p>
            <p className="text-sm lg:text-xs text-[#C0BABA]">Sweatshirts</p>
            <p className="text-sm lg:text-xs text-[#C0BABA]">Joggers</p>
            <p className="text-sm lg:text-xs text-[#C0BABA]">T-shirts</p>

          </div>
          <div className="flex flex-col w-full gap-y-1">
            <h5 className="font-bold pb-2">Info</h5>
            <p className="text-sm lg:text-xs text-[#C0BABA]">About US</p>
            <p className="text-sm lg:text-xs text-[#C0BABA]">Career</p>
          </div>
          <div className="flex flex-col w-full gap-y-1">
            <h5 className="font-bold pb-2">Help</h5>
            <p className="text-sm lg:text-xs text-[#C0BABA]">Contact</p>
            <p className="text-sm lg:text-xs text-[#C0BABA]">Customer Service</p>
          </div>
          <div className="flex justify-center items-center h-16">
            <p className="text-center text-sm lg:text-xs">
              Sign up now and be the first to know about exclusive offers,
              latest fashion news & style tips!.
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center items-center h-16 gap-x-5 ">
          <i className="text-2xl fa-brands fa-instagram"></i>
          <i className="text-2xl fa-brands fa-facebook"></i>
          <i className="text-2xl fa-brands fa-youtube"></i>
          <i className="text-2xl fa-brands fa-pinterest"></i>
        </div>
        <div className="flex justify-center">
          <h1 className="text-center">SURREAL</h1>
        </div>
        <div className="flex flex-col">
          <p className="text-center text-sm">
            The content of this site is copyright-protected.
          </p>
          <p className="text-center text-sm">All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
