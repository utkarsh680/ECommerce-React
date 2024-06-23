export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'

// for add product from api
export const fetchProducts= (data) =>{
    return {
        type:FETCH_PRODUCTS,
        payload:data
    }
}