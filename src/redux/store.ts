import { configureStore } from '@reduxjs/toolkit';
import { sizesReducer } from './slices/sizes';

export const store = configureStore({
  reducer: {
    sizes: sizesReducer,
  },
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
