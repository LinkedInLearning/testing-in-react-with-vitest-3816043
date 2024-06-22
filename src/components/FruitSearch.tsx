import { SetStateAction, useEffect, useState } from 'react';
import { Fruit, Fruits } from './Fruits';

const FruitSearch = () => {
  const [fruitName, setFruitName] = useState('');
  const [fruit, setFruit] = useState<Fruit | undefined>(undefined);
  const [error] = useState<object | null>(null);

  useEffect(() => {
    const fetchFruit = async () => {
      const fetchedFruit = await Fruits(fruitName);

      setFruit(fetchedFruit);
    };

    fetchFruit();

    return () => {};
  }, [fruitName]);

  if (error) {
    return (
      <div className="justify-content-center card p-3">{String(error)}</div>
    );
  }

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setFruitName(event.target.value);
  };

  return (
    <div>
      <div className="row mb-5 text-center justify-content-center">
        <div className="col-lg-4 col-lg-offset-4">
          <div className="container input-group">
            <input
              className="form-control"
              type="text"
              value={fruitName}
              onChange={handleInputChange}
              placeholder="Search for a fruit"
            />
          </div>
        </div>
      </div>
      {fruit ? (
        <div
          className="container text-center justify-content-center card p-3"
          key={fruit.id}
        >
          <div className="card-body">
            <h1 className="card-title">Fruit: {fruit.name}</h1>
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
      ) : (
        <div className="container text-center justify-content-center card p-3">
          <div className="card-body">
            <p className="card-text">No fruit found {fruitName}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FruitSearch;
