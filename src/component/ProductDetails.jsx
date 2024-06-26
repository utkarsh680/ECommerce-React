import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/productDetails.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProductDetails = (props) => {
  const {handleAddToCart} = props;
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);


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


  return (
    <div className={styles.container}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <Link to={`/product`}>
        <button>back</button>
      </Link>
      <button onClick={() => handleAddToCart(product, product.price)}>add to cart</button>
      
    </div>
  );
};

export default ProductDetails;
