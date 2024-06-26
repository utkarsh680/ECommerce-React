import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromWishlist } from "../Redux/Actions/Action";
import styles from "../styles/cart.module.scss";
import WishlistCard from "../component/WishlistCard";
import { toast } from "react-toastify";

export default function Wishlist(props) {
  const { handleAddToWishlist, addToCartFromWishlist } = props;
  const wishList = useSelector((state) => state.wishlistReducer.wishList);

  const [wishlistItems, setWishlistItems] = useState(wishList);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("wishlist")) {
      const items = JSON.parse(localStorage.getItem("wishlist"));
      setWishlistItems([...items]);
    }
  }, [localStorage.getItem("wishlist")]);

  const removeProductFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddToCart = (product, price) => {
    dispatch(addToCart(product, price));
    toast.success("Added to Cart.", {
      position: "top-right",
      autoClose: 500,
      className: "toast-message",
    });
    removeProductFromWishlist(product.id);
  };

  return (
    <div className={styles.container}>
      {wishlistItems.length > 0 ? (
        wishlistItems.map((product) => {
          return (
            <WishlistCard
              product={product}
              handleAddToWishlist={handleAddToWishlist}
              removeProductFromWishlist={removeProductFromWishlist}
              addToCart={handleAddToCart}
            />
          );
        })
      ) : (
        <>no data</>
      )}
    </div>
  );
}
