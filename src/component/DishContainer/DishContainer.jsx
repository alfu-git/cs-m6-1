import React, { use, useState } from "react";
import "./dish-container.css";
import Dish from "./Dish";
import Cart from "../Cart/Cart";

const DishContainer = ({ getLoadDish }) => {
  const dishesData = use(getLoadDish);
  const dishes = dishesData.meals;

  const [dishData, setDishData] =  useState([]);

  const getDishData = (dish, status) => {

    if (status) {
      const isExists = dishData.find(d => d.strMeal === dish.strMeal);

      if(!isExists) {
        setDishData([...dishData, dish]);
      }
    }
    else {
        const filterDish = dishData.filter(d => d.strMeal !== dish.strMeal);
        setDishData(filterDish);
      }
  }

  const resetCart = () => {
    setDishData([]);
  }

  return (
    <main>
      <section className="container">
        <div>
          <h2>Enjoy your Meal</h2>

          <div className="total-container">
            <div className="dish_container">
              {dishes.map((dish) => (
                <Dish 
                  getDishData={getDishData} 
                  key={dish.idMeal} 
                  dish={dish}
                  isSelected={dishData.some(d => d.idMeal === dish.idMeal)}
                  > 
                </Dish>
              ))}
            </div>

            <div className="cart-container">
              <Cart 
                dishData={dishData}
                resetCart={resetCart}
                >
                </Cart>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DishContainer;
