import React from "react";
import styles from '../styles/productCard.module.scss';
import { Link } from "react-router-dom";

export default function ProductsCard(props) {
  const { product} = props;
  return (
    <Link to={`/product/${product.id}`}>
    <div className={styles.container}>
      <div>{product.title}</div>
      <img src={product.image} alt="" />
      <button> add to cart</button>
    </div>
    </Link>
  );
}
