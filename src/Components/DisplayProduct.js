import React from "react";

const DisplayProduct = (props) => {
  return (
    <>
      <dl id="ListOfItems">
        <h1>Products</h1>
        <dt id="electronics">
          <h2>Electronics Item</h2>
          <dd>
            {props.productData.price} - {props.productData.product}
          </dd>
          <form>
            <button>Delete Product</button>
          </form>
        </dt>
        <dt id="food">
          <h2>Food Item</h2>
          <dd>
            {props.productData.price} - {props.productData.product}
          </dd>
          <form>
            <button>Delete Product</button>
          </form>
        </dt>
        <dt id="skincare">
          <h2>Skincare Item</h2>
          <dd>
            {props.productData.price} - {props.productData.product}
          </dd>
          <form>
            <button>Delete Product</button>
          </form>
        </dt>
      </dl>
    </>
  );
};

export default DisplayProduct;
