import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_PRODUCT,
  DECREMENT_PRODUCT,
} from "../Actions/Action";

const initialState = {
  loading: true,
  cartList: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  totalPrice: localStorage.getItem("totalPrice")
    ? Math.round(parseFloat(localStorage.getItem("totalPrice")) * 100) / 100
    : 0,
  totalQuantity: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).reduce(
        (sum, item) => sum + item.quantity,
        0
      )
    : 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newProduct = { ...action.payload.data, quantity: 1 };
      const newCartList = [...state.cartList, newProduct];
      localStorage.setItem("cart", JSON.stringify(newCartList));

      const updatedTotalPrice =
        Math.round(
          (state.totalPrice + parseFloat(action.payload.price)) * 100
        ) / 100;

      localStorage.setItem("totalPrice", JSON.stringify(updatedTotalPrice));

      return {
        ...state,
        cartList: newCartList,
        totalPrice: updatedTotalPrice,
      };

    case REMOVE_FROM_CART:
      const updatedItems = state.cartList.filter(
        (item) => item.id !== action.payload.item_id
      );
      localStorage.setItem("cart", JSON.stringify(updatedItems));

      const remainingTotalPrice =
        Math.round(
          updatedItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          ) * 100
        ) / 100;
      localStorage.setItem("totalPrice", JSON.stringify(remainingTotalPrice));

      return {
        ...state,
        cartList: updatedItems,
        totalPrice: remainingTotalPrice,
      };

    case INCREMENT_PRODUCT:
      const incrementedCartList = state.cartList.map((item) =>
        item.id === action.payload.item_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      const incrementedItemPrice = state.cartList.find(
        (item) => item.id === action.payload.item_id
      ).price;
      const incrementedPrice =
        Math.round((state.totalPrice + incrementedItemPrice) * 100) / 100;
      localStorage.setItem("cart", JSON.stringify(incrementedCartList));
      localStorage.setItem("totalPrice", JSON.stringify(incrementedPrice));

      return {
        ...state,
        cartList: incrementedCartList,
        totalPrice: incrementedPrice,
      };

    case DECREMENT_PRODUCT:
      const targetItem = state.cartList.find(
        (item) => item.id === action.payload.item_id
      );

      if (targetItem.quantity > 1) {
        const decrementedCartList = state.cartList.map((item) =>
          item.id === action.payload.item_id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        const decrementedPrice =
          Math.round((state.totalPrice - targetItem.price) * 100) / 100;
        localStorage.setItem("cart", JSON.stringify(decrementedCartList));
        localStorage.setItem("totalPrice", JSON.stringify(decrementedPrice));

        return {
          ...state,
          cartList: decrementedCartList,
          totalPrice: decrementedPrice,
        };
      } else {
        // If quantity is 1, remove the item from the cart
        const updatedItems = state.cartList.filter(
          (item) => item.id !== action.payload.item_id
        );
        const remainingTotalPrice =
          Math.round((state.totalPrice - targetItem.price) * 100) / 100;

        localStorage.setItem("cart", JSON.stringify(updatedItems));
        localStorage.setItem("totalPrice", JSON.stringify(remainingTotalPrice));

        return {
          ...state,
          cartList: updatedItems,
          totalPrice: remainingTotalPrice,
        };
      }

    default:
      return state;
  }
};
