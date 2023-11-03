import {useState} from 'react';
import Ingredients from '../components/Ingredients/Ingredients';
import meatImage from '../assets/meat.png';
import cheeseImage from '../assets/cheese.png';
import saladImage from '../assets/salad.png';
import baconImage from '../assets/bacon.png';
import './App.css';


interface Ingredient {
  id: number;
  name: string;
  price: number;
  image: string;
  count: number;
}

interface CountIngredient {
  name: string;
  count: number;
  price: number;
  id: number;
}
const App = () => {
  const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImage, id: 1, count: 0},
    {name: 'Cheese', price: 50, image: cheeseImage, id: 2, count: 0},
    {name: 'Salad', price: 10, image: saladImage, id: 3, count: 0},
    {name: 'Bacon', price: 60, image: baconImage, id: 4, count: 0},
  ];

  const countIngredients = INGREDIENTS.reduce<CountIngredient[]>((acc, ingredient) => {
     acc.push({
       id: ingredient.id,
       name: ingredient.name,
       count: ingredient.count,
       price: ingredient.price,
     });
    return acc;
  }, []);


  const [ingredients, setIngredients] = useState(countIngredients);

  const sumIngredients = ingredients.reduce((acc, ingredient) => {
    return acc + ingredient.count * ingredient.price;
  }, 0);


  const changeCountIngredient = (id: number) => {
    setIngredients((prevState) => prevState.map((ingredient) => {
      if (ingredient.id === id) {
        // setSumIngredients((prevState) => prevState + ingredient.price);
        return {...ingredient, count: ingredient.count + 1};
      }

      return ingredient;
    }));
  };


  const deleteIngredient = (id: number) => {
    setIngredients((prevState) => prevState.map((ingredient) => {
      if (ingredient.id === id && ingredient.count !== 0) {
        return {...ingredient, count: ingredient.count - 1};
      }

      return ingredient;
    }));
  };

  const ingredientList = INGREDIENTS.map((ingredient, index) => {
    return (
      <Ingredients
        key={ingredient.id}
        name={ingredient.name}
        image={ingredient.image}
        amount={ingredients[index].count}
        deleteIngredient={() => deleteIngredient(ingredient.id)}
        addIngredient={() => changeCountIngredient(ingredient.id)}
      />
    );
  });

  return (
    <div className="appContainer">
      <div>
        <h3>Choose ingredients</h3>
        {ingredientList}
      </div>
      <div>
        <h3>Your Burger</h3>
        <div className="Burger">
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
          <div className="Salad"></div>
          <div className="Cheese"></div>
          <div className="Meat"></div>
          <div className="BreadBottom"></div>
        </div>
        <span className="price">Price: {sumIngredients} som</span>
      </div>
    </div>
  );
};

export default App;
