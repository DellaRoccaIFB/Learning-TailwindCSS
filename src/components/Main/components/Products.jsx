import React from "react";

export default function Products({ products }) {
  return (
    <div className="sm:gap-x-38 grid w-full grid-cols-2 gap-9 p-8 font-lato sm:gap-x-28 md:gap-x-28 lg:gap-x-40 lg:p-16 xl:grid-cols-3 xl:gap-20">
      {products.map((item) => (
        <>
          <div className="group flex flex-col gap-y-1 xl:gap-y-2">
            <div className="relative">
              <img
                className="size-full rounded-sm"
                src={item.image}
                alt={item.title}
              />
              <p className="group-hover:animate-fadeUpIn absolute left-0 top-0 z-10 hidden h-full w-full overflow-hidden bg-primary bg-opacity-80 p-3 text-justify text-xs text-white transition-all group-hover:block">
                {item.description}
              </p>
            </div>
            <p className="text-pretty text-xs font-bold sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              {item.title}
            </p>
            <p className="text-sm font-semibold text-primary before:text-black before:content-['R$_'] sm:text-base md:text-lg lg:text-xl">
              {item.price}
            </p>
            <button className=" h-5 w-16 rounded-2xl bg-primary text-xs text-white shadow-md delay-[150ms] hover:scale-105 sm:h-6 sm:w-20 sm:text-base md:h-7 md:w-24 md:text-lg lg:w-28 lg:text-xl">
              Comprar
            </button>
          </div>
        </>
      ))}
    </div>
  );
}
