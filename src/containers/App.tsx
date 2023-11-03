import meatImage from '../assets/meat.png';
import cheeseImage from '../assets/cheese.png';
import saladImage from '../assets/salad.png';
import baconImage from '../assets/bacon.png';
import Ingredients from '../components/Ingredients/Ingredients';
import './App.css';
import {useState} from 'react';


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
}
const App = () => {
  const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImage, id: 1, count: 0},
    {name: 'Cheese', price: 50, image: cheeseImage, id: 2, count: 0},
    {name: 'Salad', price: 10, image: saladImage, id: 3, count: 0},
    {name: 'Bacon', price: 60, image: baconImage, id: 4, count: 0},
  ];

  const countIngredients = INGREDIENTS.reduce<CountIngredient[]>((acc, ingredient) => {
     acc.push({name: ingredient.name, count: ingredient.count});
    return acc;
  }, []);

  const [ingredients, setIngredients] = useState(countIngredients);


  console.log(ingredients);
  const deleteIngredient = (id: number) => {
    console.log(id);
  };

  const ingredientList = INGREDIENTS.map((ingredient) => {
    return (
      <Ingredients
        key={ingredient.id}
        name={ingredient.name}
        image={ingredient.image}
        amount={ingredient.count}
        deleteIngredient={() => deleteIngredient(ingredient.id)}
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
        <span className="price">Price: 150</span>
      </div>
    </div>
  );
};

export default App;
