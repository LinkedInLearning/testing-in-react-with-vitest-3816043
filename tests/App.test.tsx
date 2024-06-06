import { describe, expect, it } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Fruits } from '../src/components/Fruits';
import React from 'react';
import FruitSearch from '../src/components/FruitSearch';

const setup = () => {
  const utils = render(<FruitSearch />);
  const input = screen.getByRole('textbox');
  return {
    input,
    ...utils,
  };
};

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<App />);

    // ACT

    // ASSERT
    expect(screen.getByRole('heading', {
      level: 1,
    })).toHaveTextContent('Hello World');
  })
  
  it('updates search value on input change', async () => {
    // ARRANGE
    const { input } = setup();

    // ACT
    await act(async () => {
      fireEvent.change(input, { target: { value: 'pear' } });
    });

    // ASSERT
    expect((input as HTMLInputElement).value).toBe('pear');

    // expect page to contain fruit info
    expect(screen.getByText('Fruit: pear')).toBeInTheDocument();
  });
});
