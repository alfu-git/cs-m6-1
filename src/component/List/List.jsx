import React from 'react';
import './List.css'

const List = ({dish}) => {
  return (
    <div className='list-card' key={dish.idMeal}>
      <div>
        <h5>{dish.strMeal}</h5>
        <span>{dish.strCategory}</span>
      </div>

      <div className='list-img-container'>
        <img src={dish.strMealThumb} alt={dish.strMeal} />
      </div>
    </div>
  );
};

export default List;