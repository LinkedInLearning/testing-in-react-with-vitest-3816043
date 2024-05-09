import { useEffect, useState } from 'react';
import { Fruit, Fruits } from './Fruits';

const FruitSearch = (fruitName: string) => {
  const [fruit, setFruit] = useState<Fruit | undefined>(undefined);
  const [error] = useState<object | null>(null);

  useEffect(() => {
    const fetchFruit = async () => {
      const fetchedFruit = await Fruits(fruitName);
      setFruit(fetchedFruit);
    };

    fetchFruit();
  }, [fruitName]);

  if (error) {
    return (
      <div className="justify-content-center card p-3">{String(error)}</div>
    );
  }

  if (!fruit) {
    return (
      <div className="justify-content-center card p-3">No fruit found...</div>
    );
  }

  return (
    <div className="justify-content-center card p-3" key={fruit.id}>
      <div className="card-body">
        <h1 className="card-title">{fruit.name}</h1>
        <p className="card-subtitle">Family: {fruit.family}</p>
        <p className="card-text">Genus: {fruit.genus}</p>
        <p className="card-text">Order: {fruit.order}</p>
        <p className="card-text">Calories: {fruit.nutritions.calories}</p>
        <p className="card-text">Fat: {fruit.nutritions.fat}</p>
        <p className="card-text">Sugar: {fruit.nutritions.sugar}</p>
        <p className="card-text">
          Carbohydrates: {fruit.nutritions.carbohydrates}
        </p>
        <p className="card-text">Protein: {fruit.nutritions.protein}</p>
      </div>
    </div>
  );
};

export default FruitSearch;
