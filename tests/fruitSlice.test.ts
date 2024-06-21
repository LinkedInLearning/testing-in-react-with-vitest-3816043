import { configureStore } from '@reduxjs/toolkit';
import { describe, expect, it } from 'vitest';

import { RootState } from '../src/app/store';

import fruitsReducer, { fetchFruit } from '../src/features/fruits/fruitSlice'

import { Fruit } from '../src/components/Fruits';

const initialState: RootState['fruits'] = {
  fruit: undefined,
  status: 'idle',
  error: null,
};

describe('Fruits Slice Test', () => {
  it('Should handle initial state', () => {
    // ARRANGE
    const store = configureStore({ reducer: { fruits: fruitsReducer } });
    
    // ACT
    const state = store.getState().fruits;
    
    // ASSERT
    expect(state).toEqual(initialState);
  });

  it('Should handle loading state', () => {
    // ARRANGE
    const store = configureStore({ reducer: { fruits: fruitsReducer } });

    // ACT
    store.dispatch(fetchFruit.pending('test', 'banana'));
    const state = store.getState().fruits;
    
    // ASSERT
    expect(state.status).toBe('loading');
    expect(state.fruit).toBeUndefined();
    expect(state.error).toBeNull();
  });

  it('should handle fulfilled state', async () => {
    // ARRANGE
    const mockFruit: Fruit = {
      name: 'banana',
      id: 2,
      family: 'Musaceae',
      order: 'Zingiberales',
      genus: 'Musa',
      nutritions: {
        calories: 96,
        fat: 0.2,
        sugar: 17.2,
        carbohydrates: 22,
        protein: 1,
      },
    };
    const store = configureStore({ reducer: { fruits: fruitsReducer } });
    
    // ACT
    store.dispatch(fetchFruit.fulfilled(mockFruit, 'test', 'banana'));
    const state = store.getState().fruits;
    
    // ASSERT
    expect(state.status).toBe('succeeded');
    expect(state.fruit).toEqual(mockFruit);
    expect(state.error).toBeNull();
  });

  it('Should handle rejected state', async () => {
    // ARRANGE
    const store = configureStore({ reducer: { fruits: fruitsReducer } });
    const error = new Error('Failed to fetch fruit');
    
    // ACT
    store.dispatch(fetchFruit.rejected(error, 'test', 'banana'));
    const state = store.getState().fruits;
    
    // ASSERT
    expect(state.status).toBe('failed');
    expect(state.fruit).toBeUndefined();
    expect(state.error).toBe('Failed to fetch fruit');
  });
});
