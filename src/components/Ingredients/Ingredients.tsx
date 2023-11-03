import React from 'react';

interface Props {
  name: string;
  amount: number;
  image: string;
  deleteIngredient: React.MouseEventHandler;
}

const Ingredients:React.FC<Props> = ({name, amount, image, deleteIngredient}) => {
  return (
    <div className="imgBox">
      <img src={image} alt="Meat image"/>
      {name}
      <span className="amountIngredient">x{amount}</span>
      <button className="btnDelete" onClick={deleteIngredient}>Delete</button>
    </div>
  );
};

export default Ingredients;