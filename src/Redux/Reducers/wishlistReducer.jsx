import {
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
  } from "../Actions/Action";
  
  const initialState = {
    loading: true,
    wishList: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [],
  };
  
  export const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_WISHLIST:
        const newWishlist = [...state.wishList, action.payload.data];
        localStorage.setItem("wishlist", JSON.stringify(newWishlist));
        return {
          ...state,
          wishList: newWishlist,
        };
  
      case REMOVE_FROM_WISHLIST:
        const updatedWishlist = state.wishList.filter(item => item.id !== action.payload.item_id);
        console.log(updatedWishlist)
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        return {
          ...state,
          wishList: updatedWishlist,
        };
  
      default:
        return state;
    }
  };