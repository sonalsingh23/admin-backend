import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  wishList: [],
};

export const addtoCartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cartList.push(action.payload);
    },
    addWishlist: (state, action) => {
      state.wishList.push(action.payload);
    },
    removeCart: (state, action) => {
      const index = state.cartList.findIndex((item) => item.id === action.payload);
      if (index > -1) {
        state.cartList.splice(index, 1);
      }
    },
    removeWishlist: (state, action) => {
      const index = state.wishList.findIndex((item) => item.id === action.payload);
      if (index > -1) {
        state.wishList.splice(index, 1);
      }
    },
  },
});

export const { addCart, addWishlist, removeCart, removeWishlist } = addtoCartSlice.actions;
export default addtoCartSlice.reducer;
