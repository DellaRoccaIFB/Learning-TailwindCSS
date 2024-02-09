import React from "react";

export default function Subtitle({ numberOfItens }) {
  return (
    <div className="font-lato flex h-16 items-center justify-between border-b px-8 text-sm font-semibold sm:text-base lg:h-24 lg:px-16 lg:text-lg">
      <p className="uppercase">Promoção</p>
      <p>{numberOfItens} produtos</p>
    </div>
  );
}
