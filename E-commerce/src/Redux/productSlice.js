import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    productList: [],
  },
  reducers: {
    // Generate products
    generateProducts: (state) => {
      let products = [];
      for (let i = 100; i <= 150; i++) {
        products.push({
          id: `PR${i}`,
          price: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
        });
      }
      state.productList = [...products];
    },

    getProductDetails: (state, action) => {
      const foundProduct = state.productList.find((product) => product.id === action.payload);      
      if (foundProduct) {
        return foundProduct;  
      } else {
        return null;  
      }
    }
  }
});

export const { generateProducts, getProductDetails } = productSlice.actions;
export default productSlice.reducer;

