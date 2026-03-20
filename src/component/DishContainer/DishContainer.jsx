import React, { use } from 'react';
import './dish-container.css'
import Dish from './Dish';

const DishContainer = ({getLoadDish}) => {
  const dishesData = use(getLoadDish);
  const dishes = dishesData.meals;
  

  return (
    <main>
      <section className='container'>
        <div>
          <h2>Enjoy your Meal</h2>

          <div className='dish_container'>
            {
              dishes.map(dish => <Dish key={dish.idMeal} dish={dish}></Dish>)
            }
          </div>
        </div>
      </section>
    </main>
  );
};

export default DishContainer;