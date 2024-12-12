import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  wishlist: [],
};

export const addtocartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cartList.push(action.payload);
    },
    addWishList: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeCart: (state, action) => {
      const index = state.cartList.findIndex((item) => item.id === action.payload); 
      if (index > -1) {
        state.cartList.splice(index, 1);
      }
    },
    removeWishlist: (state, action) => {
      const index = state.wishlist.findIndex((item) => item.id === action.payload); // Correct usage
      if (index > -1) {
        state.wishlist.splice(index, 1);
      }
    },
  },
});

export const { addCart, addWishList, removeCart, removeWishlist } =
  addtocartSlice.actions;

export default addtocartSlice.reducer;

