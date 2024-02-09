import React from "react";
import Header from "./components/Header/Index";
import Main from "./components/Main/Index";
import data from "./mocks/data.js";
import Footer from "./components/Footer/Index";

export default function App() {
  return (
    <div className="mx-auto my-0 max-w-screen-2xl">
      <Header companyName={data.company_name} />
      <Main data={data} />
      <Footer data={data.footerLinks} />
    </div>
  );
}
