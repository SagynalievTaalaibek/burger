import React from 'react';
import {CountIngredient} from '../../types';
import './Burger.css';

interface Props {
  classIngredients: CountIngredient[];
}

const Burger: React.FC<Props> = ({classIngredients}) => {
  const listOfIngredients  = classIngredients.reduce<string[]>((acc, ingredient) => {
    if (ingredient.count > 0) {
      for (let i = 0; i < ingredient.count; i++) {
        acc.push(ingredient.name);
      }
    }

    return acc;
  }, []);


  const burgerElements = listOfIngredients.map((ingredientsName, index) => {
    return (
      <div className={ingredientsName} key={index}></div>
    );
  });

  return (
    <>
      {burgerElements}
    </>
  );
};

export default Burger;