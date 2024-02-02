import React, { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main/Index";
import data from "./mocks/Data";

export default function App() {
  const numberOfItens = data.products.length;

  return (
    <div className="mx-auto my-0 max-w-screen-2xl">
      <Header companyName={data.company_name} />
      <Main data={data} />
    </div>
  );
}
