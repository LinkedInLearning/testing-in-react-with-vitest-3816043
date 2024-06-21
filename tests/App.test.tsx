import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from '../src/App';
import { renderWithProviders } from './test-utils';
import FruitSearch from '../src/components/FruitSearch';

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    renderWithProviders(<WrappedApp />);

    // ACT

    // ASSERT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });

  it('Renders fruit search component and fetches fruit data', async () => {
    renderWithProviders(<FruitSearch />);

    const input = screen.getByPlaceholderText(/Search for a fruit/i);
    fireEvent.change(input, { target: { value: 'pear' } });

    // Wait for the async action to finish
    const fruitTitle = await screen.findByText(/Fruit: pear/i);

    expect(fruitTitle).toBeInTheDocument();
  });

  it('Renders not found if path is invalid', () => {
    // ARRANGE
    render(
      <MemoryRouter initialEntries={['/j']}>
        <App />
      </MemoryRouter>
    );

    // ACT

    // ASSERT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(
      'Sorry the page you are looking for cannot be found, head Home and try again'
    );
  });
});
