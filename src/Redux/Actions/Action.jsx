export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const ADD_TO_CART = 'ADD_TO_CART'

// for add product from api
export const fetchProducts= (data) =>{
    return {
        type:FETCH_PRODUCTS,
        payload:data
    }
}

// for add product into the cart
export const addToCart = (data) => {
    return{
        type: ADD_TO_CART,
        payload:data
    }
}