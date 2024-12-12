import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
  cart: [],
};

export const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    addCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { setToken, setUser, addCart } = loginSlice.actions;

export default loginSlice.reducer;

