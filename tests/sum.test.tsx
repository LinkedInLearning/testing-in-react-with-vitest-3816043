import { expect, it } from 'vitest';

import { sum, multiply } from '../src/sum';

it('Should add two numbers', () => {
  expect(sum(10, 10)).toBe(20);
});

it('Should multiply two numbers', () => {
  expect(multiply(10, 10)).toBe(100);
});
