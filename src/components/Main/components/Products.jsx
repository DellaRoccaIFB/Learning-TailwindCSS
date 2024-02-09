import React from "react";

export default function Products({ products }) {
  return (
    <div className="sm:gap-x-38 grid w-full grid-cols-2 gap-9 p-8 font-lato sm:gap-x-28 md:gap-x-28 lg:gap-x-40 lg:p-16 xl:grid-cols-3 xl:gap-20">
      {products.map((item) => (
        <div key={item.id} className="flex flex-col gap-y-1 xl:gap-y-2">
          <div className="group relative">
            <img
              className="size-full rounded-sm"
              src={item.image}
              alt={item.title}
            />
          </div>
          <p className="text-pretty text-xs font-bold sm:text-base md:text-lg">
            {item.title}
          </p>
          <p className="text-sm font-semibold text-primary before:text-black before:content-['R$_'] sm:text-base md:text-lg">
            {item.price}
          </p>
          <button className="animate-duration-100 animate-ease-in h-5 w-16 rounded-2xl bg-primary text-xs text-white shadow-md transition-all duration-100 hover:scale-105 sm:h-6 sm:w-20 sm:text-base md:h-7 md:w-24 md:text-lg lg:w-28">
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
}
