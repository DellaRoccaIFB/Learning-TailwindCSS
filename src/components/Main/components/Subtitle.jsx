import React from "react";

export default function Subtitle({ numberOfItens }) {
  return (
    <div className="flex h-16 items-center justify-between border-b px-8 text-sm font-semibold">
      <p className="uppercase">Promoção</p>
      <p>{numberOfItens} produtos</p>
    </div>
  );
}
