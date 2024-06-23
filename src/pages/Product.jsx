import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../Redux/Actions/Action";
import ProductsCard from "../component/ProductsCard";
export default function Product() {
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
    <div>
      <div>
        {products.map((product) => {
          return (
            <>
              {" "}
              <ProductsCard product={product} key={product.id} />
            </>
          );
        })}
      </div>
    </div>
  );
}
