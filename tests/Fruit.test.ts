import { describe, expect, it, test } from 'vitest';
import { Fruits } from '../src/components/Fruits';


describe('Loading Fruit Data', () => {

  it('Loads fruit data', async () => {
    // ARRANGE
    const fruit = await Fruits('strawberry');

    // ASSERT
    expect(fruit).toMatchSnapshot();
  });

  it('Asserts fruit data', async () => {
    // ARRANGE
    const banana = await Fruits('banana');
    const strawberry = await Fruits('strawberry');

    // ASSERT
    expect(banana?.nutritions.fat).toEqual(0.2);
    expect(strawberry?.nutritions.calories).toEqual(29);
  });

  test('Throws an error if fruit is not found', async () => {
    // ASSERT
    expect(async () => await Fruits('apple')).rejects.toThrowError('No fruit found with name: apple');
  });
})