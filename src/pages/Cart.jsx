import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/cart.module.scss";
import { decrementProduct, incrementProduct, removeFromCart } from "../Redux/Actions/Action";
import CartCard from "../component/CartCard";
import { toast } from "react-toastify";
export default function Cart() {
  const product = useSelector((state) => state.cartReducer.cartList);
  const cartPrice = useSelector((state) => state.cartReducer.totalPrice);

  const [cartItems, setCartItems] = useState(product);

  const dispatch = useDispatch();

  // Add item from localStorage
  useEffect(() => {
    // Get items from localstorage
    if (localStorage.getItem("cart")) {
      const items = JSON.parse(localStorage.getItem("cart"));
      setCartItems([...items]);
    }
  }, [localStorage.getItem("cart")]);

  const removeProductHandle = (id, price) => {
    console.log("remove from cart", id);
    dispatch(removeFromCart(id, price));
    toast.success("Successfully Remove from cart", {
      position: "top-right",
      autoClose: 500,
      className: "toast-message",
    });
  };

  const incrementProductHandle = (id) => {
    console.log("increment product", id);
    dispatch(incrementProduct(id));

  };

  const decrementProductHandle = (id) => {
    console.log("decrement product", id);
    dispatch(decrementProduct(id));
  };
  return (
    <div className={styles.container}>
      {cartItems.length > 0 ? (
        cartItems.map((product) => {
          return (
            <CartCard
              product={product}
              key = {product.id}
              removeFromCart={removeProductHandle}
              incrementProduct={incrementProductHandle}
              decrementProduct={decrementProductHandle}
            />
          );
        })
      ) : (
        <>no data</>
      )}
      <div className={styles.cardBox}>
        {cartItems.map((product) => {
          return <div style={{ display: "flex" }} key={product.id}>{`${product.price}  `}</div>;
        })}
        <div>total: {cartPrice}</div>
      </div>
    </div>
  );
}
