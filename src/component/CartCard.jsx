import React from "react";

export default function CartCard(props) {
  const { product, removeFromCart, incrementProduct, decrementProduct } = props;
 console.log("aatutut",product)
 
  return (
    <>
      <div id={product.id} key={product.id}>
       
        {product.title}{" "}
      </div>
     
      <button onClick={() => removeFromCart(product.id, product.price)}>
        Remove
      </button>
      <button onClick={() => incrementProduct(product.id)}>increament</button>
      {product.quantity}
      <button onClick={() => decrementProduct(product.id)}>decrement</button>
    </>
  );
}
