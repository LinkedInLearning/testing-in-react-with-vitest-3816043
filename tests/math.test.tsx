import { expect, it } from 'vitest';

import { sum, multiply } from '../src/math';

it('Should add two numbers', () => {
  expect(sum(12, 12)).toBe(24);
});

it('Should multiply two numbers', () => {
  expect(multiply(12, 12)).toBe(144);
});
