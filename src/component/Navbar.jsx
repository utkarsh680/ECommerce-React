import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.scss";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li className={styles.list}>
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/cart" className={styles.cartLink}>
            Cart
            <p className={styles.cart}>0</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
