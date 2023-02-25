import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProduct } from "../../services/api";
import { RootState } from "../store";
import { ProductAllInfo } from "../../@types/types";

type ProductsState = {
  entities: ProductAllInfo | null,
  status: 'idle' | 'loading' | 'loaded' | 'error'
  error: string | null
}

const initialState: ProductsState = {
  entities: null,
  status: 'idle',
  error: "",
};

export const loadProduct = createAsyncThunk(
  '@@product/load-all',
  async (id: number) => {
    const data = await getProduct(id);

    return data;
  }
);

const productsSlice = createSlice({
  name: "@@product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProduct.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadProduct.rejected, (state) => {
        state.status = 'error';
        state.error = 'Something went wrong!'
      })
      .addCase(loadProduct.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.status = 'loaded';
      })
  }
});

export const productReducer = productsSlice.reducer;
export const selectProduct = (state: RootState) => state.product.entities;
export const selectProductLoadStatus = (state: RootState) => state.product.status;
