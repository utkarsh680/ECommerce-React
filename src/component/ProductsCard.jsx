import React from "react";
import styles from "../styles/productCard.module.scss";
import { Link } from "react-router-dom";

export default function ProductsCard(props) {
  const { product, handleAddToCart, handleAddToWishlist } = props;

  return (
    <>
      <div className={styles.container}>
        <Link to={`/product/${product.id}`}>
          <div className={styles.imageOuterBox}>
            <div className={styles.imageBox}>
              <img src={product.image} alt="" />
            </div>
          </div>
        </Link>
        <div className={styles.cardDetails}>
          <div className={styles.title}>{product.title}</div>
          <div className={styles.priceAndCart}>
            <div className={styles.price}> {product.price}$</div>
            <div
              className={styles.cartButton}
              onClick={() => handleAddToCart(product, product.price)}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
                alt=""
              />
            </div>
            <div
              className={styles.wishListButton}
              onClick={() => handleAddToWishlist(product)}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* 
      <button onClick={() => handleAddToWishlist(product)}>add to wishlist</button> */}
    </>
  );
}
