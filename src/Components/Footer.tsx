import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center">
      <div className="flex flex-col w-[90vw] pt-10 gap-y-5">
        <div className="flex flex-col w-full gap-y-3">
          <div className="flex flex-col w-full gap-y-1 ">
            <h5 className="font-bold pb-2">Shop</h5>
            <p className="text-sm text-[#C0BABA]">Oversized T-shirt</p>
            <p className="text-sm text-[#C0BABA]">Hoodies</p>
            <p className="text-sm text-[#C0BABA]">Sweatshirts</p>
          </div>
          <div className="flex flex-col w-full gap-y-1">
            <h5 className="font-bold pb-2">Shop</h5>
            <p className="text-sm text-[#C0BABA]">Oversized T-shirt</p>
            <p className="text-sm text-[#C0BABA]">Hoodies</p>
            <p className="text-sm text-[#C0BABA]">Sweatshirts</p>
          </div>
          <div className="flex flex-col w-full gap-y-1">
            <h5 className="font-bold pb-2">Shop</h5>
            <p className="text-sm text-[#C0BABA]">Oversized T-shirt</p>
            <p className="text-sm text-[#C0BABA]">Hoodies</p>
            <p className="text-sm text-[#C0BABA]">Sweatshirts</p>
          </div>
          <div className="flex justify-center items-center h-16">
            <p className="text-center text-sm">
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
