
import { createSlice, current, } from "@reduxjs/toolkit";




export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
  
    //update the cart
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
  },
   
 
});

export const {
  updateCart
} = cartSlice.actions;

export default cartSlice.reducer;
