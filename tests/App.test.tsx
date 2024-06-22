import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { WrappedApp } from '../src/App';

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
});
