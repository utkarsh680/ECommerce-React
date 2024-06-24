import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/productDetails.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Actions/Action";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const result = await res.json();
        setProduct(result);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  // Add to cart
  const handleAddToCart = (product) => {
    let flag = true;
    if (localStorage.getItem("cart")) {
      const tempArray = [...JSON.parse(localStorage.getItem("cart"))];
      console.log("te,", tempArray)
      tempArray.map((item) => {
        if (item.id === product.id) {
          flag = false;

          console.log("already added");
          return;
        }
      });
    }
    if (!flag) {
      return;
    }
    dispatch(addToCart(product));
    console.log("added to cart");
  };

  return (
    <div className={styles.container}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Link to={`/product`}>
        <button>back</button>
      </Link>
      <button onClick={() => handleAddToCart(product)}>add to cart</button>
    </div>
  );
};

export default ProductDetails;
