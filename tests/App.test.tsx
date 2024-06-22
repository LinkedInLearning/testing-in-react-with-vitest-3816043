import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

import App from '../src/App';

describe('App', () => {
    it('Renders h1 content', () => {
      // Arrange
      render(<App />);

      // Act

      // Assert
      expect(
        // Accessibility Testing
        screen.getByRole('heading', {
          level: 1,
        })
      ).toHaveTextContent('Hello World');
    });
});
