import React, { useState } from "react";
import "./App.css";
import DisplayProduct from "./Components/DisplayProduct";
import Input from "./Components/Input";

function App() {
  const [data, setData] = useState("");
  const SaveSellerDataHandler = (enteredSellerData) => {
    setData(enteredSellerData);
  };

  return (
    <>
      <Input onSaveSellerData={SaveSellerDataHandler} />
      <DisplayProduct productData={data}></DisplayProduct>
    </>
  );
}

export default App;
