import { ADD_TO_CART } from "../Actions/Action";
const initialState = {
  loading: true,
  cartList: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  totalPrice: localStorage.getItem("totalPrice")
    ? parseFloat(localStorage.getItem("totalPrice"))
    : 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newCartList = [...state.cartList, action.payload];
      localStorage.setItem("cart", JSON.stringify(newCartList));

      const updatedTotalPrice =
        state.totalPrice + Math.round(parseFloat(action.payload.price));
      localStorage.setItem("totalPrice", JSON.stringify(updatedTotalPrice));

      return {
        ...state,
        cartList: newCartList,
        totalPrice: updatedTotalPrice,
      };

    // case REMOVE_FROM_CART:
    //   let items = [];
    //   if(localStorage.getItem('cart')){
    //     items = [...JSON.parse(localStorage.getItem('cart'))];
    //   }
    //   const updatedItem = items.filter((item) => item.id !== action.payload.item_id)
    //   localStorage.setItem('cart', JSON.stringify(updatedItem))

    //   if (updatedItem.length !== 0) {
    //     // update total price in local storage
    //     localStorage.setItem('totalPrice', JSON.stringify(parseInt(localStorage.getItem('totalPrice')) - Math.round(parseFloat(action.payload.price))));
    // } else {
    //     localStorage.setItem('totalPrice', JSON.stringify(0));
    // }

    //   return {
    //     ...state,
    //     cartList: updatedItem,
    //     totalPrice: state.totalPrice - Math.round(parseFloat(action.payload.price))

    //   };

    // case MOVE_TO_WISHLIST_FROM_CART:
    //   const addDataToStorage = JSON.parse(localStorage.getItem('cart'))
    //   if(addDataToStorage){
    //     const newItem =[...addDataToStorage, action.payload];
    //     localStorage.setItem('cart', JSON.stringify(newItem));

    //   }else{
    //     localStorage.setItem('cart', JSON.stringify([action.payload]))
    //   }
    //   return {
    //     ...state,
    //      cartList: [...state.cartList]
    //   }

    default:
      return state;
  }
};
