import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items array
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        // If item already exists in cart, update its quantity
        existingItem.quantity += 1;
    
      } else {
        // If item doesn't exist, add it to the cart with quantity 1
        state.items.push({ ...newItem, quantity: 1 }); //spread operator
      }
      // Update totalPrice
      state.totalPrice += newItem.price;
    },


    removeItem: (state, action) => {
      const itemToRemove = action.payload;
      const existingItem = state.items.find(item => item.id === itemToRemove.id);

      if (existingItem) {
        if (existingItem.quantity === 1) {
          // If quantity is 1, remove the item from the cart
          state.items = state.items.filter(item => item.id !== itemToRemove.id);
        } else {
          // If quantity is more than 1, decrease its quantity
          existingItem.quantity -= 1;
        }
        // Update totalPrice
        state.totalPrice -= itemToRemove.price;
      }
    },
    clearCart: state => {
      state.items = []; // Clear items array
      state.totalPrice = 0; // Reset totalPrice
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
