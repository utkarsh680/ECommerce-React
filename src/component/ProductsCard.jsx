import React from "react";
import styles from "../styles/productCard.module.scss";
import { Link } from "react-router-dom";

export default function ProductsCard(props) {
  const { product, handleAddToCart, handleAddToWishlist } = props;

  return (
    <>
      <Link to={`/product/${product.id}`}>
        <div className={styles.container}>
          <div>{product.title}</div>
          <img src={product.image} alt="" />
        </div>
      </Link>
      <button onClick={() => handleAddToCart(product, product.price)}>
        add to cart
      </button>
      <button onClick={() => handleAddToWishlist(product)}>add to wishlist</button>
    </>
  );
}
