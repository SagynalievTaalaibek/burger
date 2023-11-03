import React from 'react';

interface Props {
  name: string;
  amount: number;
  image: string;
  deleteIngredient: React.MouseEventHandler;
  addIngredient: React.MouseEventHandler;
}

const Ingredients:React.FC<Props> = ({name, amount, image, deleteIngredient, addIngredient}) => {
  return (
    <div className="imgBox">
      <div onClick={addIngredient}>
        <img src={image} alt="Meat image"/>
      </div>
      {name}
      <span className="amountIngredient">x{amount}</span>
      <button className="btnDelete" onClick={deleteIngredient}>Delete</button>
    </div>
  );
};

export default Ingredients;