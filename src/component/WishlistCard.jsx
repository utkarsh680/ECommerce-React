import React from "react";

export default function WishlistCard(props) {
  const {product, removeProductFromWishlist} = props;
  return (
    <>
      <div id={product.id} key={product.id}>
        {product.title}{" "}
      </div>
      <button onClick={() => removeProductFromWishlist(product.id)}>
        Remove
      </button>
    </>
  );
}
