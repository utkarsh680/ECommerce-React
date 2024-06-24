import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const product = useSelector((state) => state.cartReducer.cartList);

  const [cartItems, setCartItems] = useState(product);

  // Add item from localStorage
  useEffect(() => {
    // Get items from localstorage
    if (localStorage.getItem("cart")) {
      const items = JSON.parse(localStorage.getItem("cart"));
      setCartItems([...items]);
    }
  }, [localStorage.getItem("cart")]);
  if (!cartItems) {
    // cartItems is undefined or null, handle accordingly
    return <div>Loading...</div>;
  }

  if (cartItems.length === 0) {
    // cartItems is an empty array, handle accordingly
    return <div>Your cart is empty.</div>;
  }
  return (
    <div>
      {cartItems.map((product) => {
        return <div id={product.id} key={product.id}> {product.id} </div>;
      })}
    </div>
  );
}
