import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItem: [],
  totalAmount: 0,
  totalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItem.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItem.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.imgURL,
          Price: newItem.Price,
          quantity: 1,
          totalPrice: newItem.Price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          existingItem.totalPrice * existingItem.quantity;
      }
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + item.Price * item.quantity, 0
      );
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItem.find((ele) => ele.id === id);

      if (existingItem) {
        state.cartItem = state.cartItem.filter((ele) => ele.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + item.Price * item.quantity, 0
      );
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
