import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.scss";
export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.navbarElement}>
      <Link to="/" className={styles.logo}></Link>
        <ul>  
          <li className={styles.list}>
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/product">Wishlist</Link>
          </li>
          <li className={styles.cartList}>
            <Link to="/cart">
              Cart
              <p className={styles.cartItem}>0</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
