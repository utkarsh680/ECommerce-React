import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, removeFromWishlist } from "../Redux/Actions/Action";
import ProductsCard from "../component/ProductsCard";
import styles from "../styles/product.module.scss";
export default function Product(props) {
  const { handleAddToCart, handleAddToWishlist } = props;
  const products = useSelector((state) => state.showDataReducer.products);
  const loading = useSelector((state) => state.showDataReducer.loading);
  const url = "https://fakestoreapi.com";
  const dispatch = useDispatch();
  const getProducts = async () => {
    try {
      const res = await fetch(`${url}/products`);
      const result = await res.json();
      dispatch(fetchProducts(result));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardBox}>
        {products.map((product) => {
          return (
            <ProductsCard
              product={product}
              key={product.id}
              handleAddToCart={handleAddToCart}
              handleAddToWishlist={handleAddToWishlist}
            />
          );
        })}
      </div>
    </div>
  );
}
