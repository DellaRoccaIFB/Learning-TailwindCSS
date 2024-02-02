import React, { useEffect } from "react";
import { FiUser, FiSearch, FiShoppingCart } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";
import image from "../../assets/ExportImages";

export default function Header({ companyName }) {
  const icon = {
    size: 16,
    color: "#5CA720",
  };

  return (
    <>
      <div className="flex h-16 w-full items-center justify-between px-7 sm:h-20 sm:px-10 md:h-24 md:justify-between md:px-12 xl:h-32 xl:px-20">
        <div className="flex h-full items-center gap-x-1 lg:gap-x-2">
          <GoStarFill className="size-4 sm:size-5 md:size-6 xl:size-8" />
          <p className="pb-1 font-bold md:text-lg lg:text-xl xl:text-2xl">
            {companyName}
          </p>
        </div>
        <div className="flex gap-5 sm:gap-x-6 md:gap-x-8 xl:gap-x-14">
          <FiSearch
            className="size-4 sm:size-5 md:size-6 xl:size-8"
            color={icon.color}
          />
          <FiUser
            className="size-4 sm:size-5 md:size-6 xl:size-8"
            color={icon.color}
          />
          <FiShoppingCart
            className="size-4 sm:size-5 md:size-6 xl:size-8"
            color={icon.color}
          />
        </div>
      </div>
      <div>
        <img
          className="w-screen"
          src={image.banner}
          alt="offer mega sale shop now"
        />
      </div>
    </>
  );
}
