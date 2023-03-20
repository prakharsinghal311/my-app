import React, { useState } from "react";

const Input = (props) => {
  const [enteredId, setEnteredId] = useState();
  const [enteredPrice, setEnteredPrice] = useState();
  const [enteredProduct, setEnteredProduct] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");

  const idChangeHandler = (event) => {
    setEnteredId(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const productChangeHandler = (event) => {
    setEnteredProduct(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const sellerData = {
      key: Math.random().toString(),
      id: enteredId,
      price: enteredPrice,
      product: enteredProduct,
      category: enteredCategory,
    };

    localStorage.setItem(sellerData.id, JSON.stringify(sellerData));
    props.onSaveSellerData(sellerData);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>Product ID:</label>
        <input type="number" onChange={idChangeHandler}></input>
        <label>Selling Price:</label>
        <input type="number" onChange={priceChangeHandler}></input>
        <label>Product Name:</label>
        <input type="text" onChange={productChangeHandler}></input>
        <label>Choose a Category:</label>
        <select onChange={categoryChangeHandler}>
          <option>Electronics</option>
          <option>Food</option>
          <option>Skincare</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
    </>
  );
};

export default Input;
