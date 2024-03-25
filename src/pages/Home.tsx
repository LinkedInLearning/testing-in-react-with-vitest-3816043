import { useState } from 'react';
import { Fruits } from '../components/Fruits';

function Home() {
  const [fruit, setFruit] = useState<any>(undefined);
  const [fruitName, setFruitName] = useState<string>('');

  const fetchFruitData = async () => {
    const fruit = await Fruits(fruitName);

    if (!fruit) {
      return setFruit(undefined);
    }

    setFruit(fruit);

    return fruit;
  };

  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <input
          type="text"
          value={fruitName}
          onChange={(e) => setFruitName(e.target.value)}
        />
        <button onClick={fetchFruitData}>Find Fruit Data</button>
      </div>
      <div>
        {fruit && (
          <div>
            <h2>{fruit.name}</h2>
            <p>Family: {fruit.family}</p>
            <p>Genus: {fruit.genus}</p>
            <p>Order: {fruit.order}</p>
            <p>Calories: {fruit.nutritions.calories}</p>
            <p>Fat: {fruit.nutritions.fat}</p>
            <p>Sugar: {fruit.nutritions.sugar}</p>
            <p>Carbohydrates: {fruit.nutritions.carbohydrates}</p>
            <p>Protein: {fruit.nutritions.protein}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
