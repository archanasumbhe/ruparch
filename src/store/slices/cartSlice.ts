import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartItem: [],
};

export const cartSlice = createSlice({
name: "cart",
initialState,
reducer:{
    productToCart : (state, action) =>{
    const product = action.payload;
        console.log('product', product)
    }
}
})