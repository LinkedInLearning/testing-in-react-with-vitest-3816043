import { useEffect, useState } from 'react';
import { AppDispatch, RootState } from '../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFruit } from '../features/fruits/fruitSlice';

const FruitSearch = () => {
  const [fruitName, setFruitName] = useState('');

  const dispatch: AppDispatch = useDispatch();
  
  const fruit = useSelector((state: RootState) => state.fruits.fruit);
  const status = useSelector((state: RootState) => state.fruits.status);
  const error = useSelector((state: RootState) => state.fruits.error);


  useEffect(() => {
    if (fruitName) {
      dispatch(fetchFruit(fruitName))
    }

    return () => {};
  }, [fruitName]);

  const handleInputChange = (event: {
    target: { value: string };
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
      {status === 'loading' && (
        <div className="container text-center justify-content-center card p-3">
          <div className="card-body">
            <p className="card-text">Loading...</p>
          </div>
        </div>
      )}

      {status === 'failed' && error && (
        <div className="justify-content-center card p-3">{String(error)}</div>
      )}

      {status === 'succeeded' && fruit ? (
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
