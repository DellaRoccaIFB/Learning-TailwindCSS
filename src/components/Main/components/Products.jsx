import React from "react";

export default function Products({ products }) {
  return (
    <div className="flex flex-wrap justify-between gap-y-4 p-8">
      {products.map((item) => (
        <>
          <div className="flex flex-col gap-y-1">
            <div>
              <img
                className="group size-32"
                src={item.image}
                alt={item.title}
              />
            </div>
            <p className="text-xs font-bold">{item.title}</p>
            <p className="text-sm font-semibold text-primary before:text-black before:content-['R$_']">
              {item.price}
            </p>
            <button className="h-5 w-16 rounded-xl bg-primary text-xs text-white shadow-md delay-[75ms] hover:scale-105">
              Comprar
            </button>
          </div>
        </>
      ))}
    </div>
  );
}
