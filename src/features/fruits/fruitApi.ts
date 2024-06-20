import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadFruit } from '../../components/Fruits';

// Async thunk for fetching fruit
export const fetchFruit = createAsyncThunk(
  'fruits/fetchFruit',
  async (name: string) => {
    const fruit = await loadFruit(name);
    return fruit;
  }
);