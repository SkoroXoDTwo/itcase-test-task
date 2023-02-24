import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSizes } from "../../services/api";

type SizesI = {
  id: number,
  label: string,
  number: number
}

type SizesState = {
  items: SizesI[] | null,
  status: 'idle' | 'loading' | 'loaded' | 'error'
  error: string | null
}

const initialState: SizesState = {
  items: [],
  status: 'idle',
  error: "",
};

export const loadSizes = createAsyncThunk(
  '@@sizes/load-all',
  async () => {
    const data = await getSizes();

    return data;
  }
);

const sizesSlice = createSlice({
  name: "@@sizes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadSizes.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadSizes.rejected, (state) => {
        state.status = 'idle';
        state.error = 'Something went wrong!'
      })
      .addCase(loadSizes.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'idle';
      })
  }
});

export const sizesReducer = sizesSlice.reducer;
