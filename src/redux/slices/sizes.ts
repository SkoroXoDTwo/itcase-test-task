import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSizes } from "../../services/api";

type SizesI = {
  id: number,
  label: string,
  number: number
}

type SizesState = {
  entities: SizesI[] | null,
  status: 'idle' | 'loading' | 'loaded' | 'error'
  error: string | null
}

const initialState: SizesState = {
  entities: [],
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
      .addCase(loadSizes.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadSizes.rejected, (state) => {
        state.status = 'error';
        state.error = 'Something went wrong!'
      })
      .addCase(loadSizes.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.status = 'loaded';
      })
  }
});

export const sizesReducer = sizesSlice.reducer;
