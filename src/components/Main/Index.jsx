import React, { useEffect } from "react";
import Subtitle from "./components/Subtitle";
import Products from "./components/Products";

export default function Main({ data }) {
  const numberOfItens = data.products.length;

  return (
    <div className="">
      <Subtitle numberOfItens={numberOfItens} />
      <Products products={data.products} />
    </div>
  );
}
