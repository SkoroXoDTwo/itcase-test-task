import { configureStore } from '@reduxjs/toolkit';
import { sizesReducer } from './slices/sizes';
import { productsReducer } from './slices/products';

export const store = configureStore({
  reducer: {
    sizes: sizesReducer,
    products: productsReducer,
  },
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
