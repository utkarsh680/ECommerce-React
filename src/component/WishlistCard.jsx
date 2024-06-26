import React from "react";

export default function WishlistCard(props) {
  const {product, removeProductFromWishlist, addToCart} = props;
  return (
    <>
      <div id={product.id} key={product.id}>
        {product.title}{" "}
      </div>
      <button onClick={() => removeProductFromWishlist(product.id)}>
        Remove
      </button>
      <button onClick={() => addToCart(product, product.price)}>add to cart</button>
    </>
  );
}
