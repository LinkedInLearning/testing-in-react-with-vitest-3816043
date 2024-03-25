import { useEffect, useState } from 'react';
import { Fruit, Fruits } from '../components/Fruits';

const FruitPage = (fruitName: string) => {
  const [fruit, setFruit] = useState<Fruit | undefined>(undefined);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    const fetchFruit = async () => {
      const fetchedFruit = await Fruits(fruitName);
      setFruit(fetchedFruit);
    };

    fetchFruit();
  }, [fruitName]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!fruit) {
    return <div>No fruit found...</div>;
  }

  return (
    <div key={fruit.id}>
      <h1>{fruit.name}</h1>
      <p>Family: {fruit.family}</p>
      <p>Genus: {fruit.genus}</p>
      <p>Order: {fruit.order}</p>
      <p>Calories: {fruit.nutritions.calories}</p>
      <p>Fat: {fruit.nutritions.fat}</p>
      <p>Sugar: {fruit.nutritions.sugar}</p>
      <p>Carbohydrates: {fruit.nutritions.carbohydrates}</p>
      <p>Protein: {fruit.nutritions.protein}</p>
    </div>
  );
};

export default FruitPage;
