import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../services/api";
import { RootState } from "../store";

type Product = {
  id: number,
  name: string,
  imgLink: string,
}

type ProductsState = {
  entities: Product[] | null,
  status: 'idle' | 'loading' | 'loaded' | 'error'
  error: string | null
}

const initialState: ProductsState = {
  entities: [],
  status: 'idle',
  error: "",
};

export const loadProducts = createAsyncThunk(
  '@@products/load-all',
  async () => {
    const res = await getProducts();
    const data = res.map((item: any) => {
      const { id, name } = item;
      const imgLink = item.colors[0].images[0] ? item.colors[0].images[0] : ''
      return { id, name, imgLink }
    })
    console.log(data)
    return data;
  }
);

const productsSlice = createSlice({
  name: "@@products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadProducts.rejected, (state) => {
        state.status = 'error';
        state.error = 'Something went wrong!'
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.status = 'loaded';
      })
  }
});

export const productsReducer = productsSlice.reducer;
export const selectProducts = (state: RootState) => state.products.entities;
