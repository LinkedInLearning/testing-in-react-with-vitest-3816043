import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Fruit } from '../../components/Fruits';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadFruit } from '../../components/Fruits';

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

// Async Thunks - make it easier to work with asynchronous actions in Redux, by enabling
// writing action creators that return a function instead of an action object.
// Async thunk for fetching fruit
export const fetchFruit = createAsyncThunk(
  'fruits/fetchFruit',
  async (name: string) => {
    const fruit = await loadFruit(name);
    return fruit;
  }
);

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
