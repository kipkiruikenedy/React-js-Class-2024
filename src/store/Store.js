
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './actions/cartSlice';

export default configureStore(
    {
  reducer: {
    cart: cartReducer
  }
}
);


