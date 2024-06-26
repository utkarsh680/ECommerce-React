export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const INCREMENT_PRODUCT = "INCREMENT_PRODUCT";
export const DECREMENT_PRODUCT = "DECREMENT_PRODUCT";

//wishlist
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

// for add product from api
export const fetchProducts = (data) => {
  return {
    type: FETCH_PRODUCTS,
    payload: data,
  };
};

// for add product into the cart
export const addToCart = (data, price) => {
  return {
    type: ADD_TO_CART,
    payload: {
      data,
      price,
    },
  };
};

// for remove product from the cart
export const removeFromCart = (item_id, price) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      item_id,
      price,
    },
  };
};
//increment of product in cart
export const incrementProduct = (item_id) => ({
  type: INCREMENT_PRODUCT,
  payload: { item_id },
});

//decrement of product in cart

export const decrementProduct = (item_id) => ({
  type: DECREMENT_PRODUCT,
  payload: { item_id },
});

//wishlist

// for add product into the wishlist
export const addToWishlist = (data) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: {
      data,
    },
  };
};

// for remove product from the wishlist
export const removeFromWishlist = (item_id) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: {
      item_id,
    },
  };
};
