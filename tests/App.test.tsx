import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from '../src/App';

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<WrappedApp />);

    // ACT

    // ASSERT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
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
