import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.scss";
import { useSelector } from "react-redux";
export default function Navbar() {
  const product = useSelector((state) => state.cartReducer.cartList);

  return (
    <div className={styles.container}>
      <div className={styles.navbarElement}>
      <Link to="/" className={styles.logo}></Link>
        <ul>  
          <li className={styles.list}>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li className={styles.cartList}>
            <Link to="/cart">
              Cart
              <p className={styles.cartItem}>{product.length}</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
