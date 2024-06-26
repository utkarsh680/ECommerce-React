import React from "react";
import { useDispatch } from "react-redux"; // Import Provider from react-redux
import Product from "./pages/Product";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./component/ProductDetails";
import { addToCart, addToWishlist } from "./Redux/Actions/Action";
import Wishlist from "./pages/Wishlist";
import { toast } from "react-toastify";

function App() {
  // Add to cart
  const dispatch = useDispatch();
  const handleAddToCart = (product, price) => {
    let flag = true;
    if (localStorage.getItem("cart")) {
      const tempArray = [...JSON.parse(localStorage.getItem("cart"))];
      tempArray.map((item) => {
        if (item.id === product.id) {
          flag = false;

          toast.error("Already in Cart!", {
            position: "top-right",
            autoClose: 1000,
            className: "toast-message",
          });
          return;
        }
      });
    }
    if (!flag) {
      return;
    }
    dispatch(addToCart(product, price));
    toast.success("Added to Cart!", {
      position: "top-right",
      autoClose: 1000,
      className: "toast-message",
    });
  };
  const handleAddToWishlist = (product) => {
    let flag = true;
    if (localStorage.getItem("wishlist")) {
      const tempArray = [...JSON.parse(localStorage.getItem("wishlist"))];
      tempArray.map((item) => {
        if (item.id === product.id) {
          flag = false;
          toast.error("Already in Wishlist!", {
            position: "top-right",
            autoClose: 1000,
            className: "toast-message",
          });
          return;
        }
      });
    }
    if (!flag) {
      return;
    }
    dispatch(addToWishlist(product));
    toast.success("Added to Wishlist!", {
      position: "top-right",
      autoClose: 1000,
      className: "toast-message",
    });
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product"
          element={
            <Product
              handleAddToCart={handleAddToCart}
              handleAddToWishlist={handleAddToWishlist}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              handleAddToCart={handleAddToCart}
              addToCartFromWishlist={handleAddToCart}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
