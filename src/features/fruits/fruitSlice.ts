// src/store/fruitsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Fruit } from '../../components/Fruits';
import { fetchFruit } from './fruitApi';

interface FruitsState {
  fruit: Fruit | undefined;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: FruitsState = {
  fruit: undefined,
  status: 'idle',
  error: null,
};

const fruitsSlice = createSlice({
  name: 'fruits',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFruit.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchFruit.fulfilled, (state, action: PayloadAction<Fruit | undefined>) => {
        state.status = 'succeeded';
        state.fruit = action.payload;
      })
      .addCase(fetchFruit.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch fruit';
      });
  },
});

export default fruitsSlice.reducer;
