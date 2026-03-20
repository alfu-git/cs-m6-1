import React, { useState } from "react";
import "./dish.css";

const Dish = ({ dish }) => {
  // get ingredients and measure dynamically
  let ingredientsArr = [];

  for (let i = 0; i < 20; i++) {
    const ingredients = dish[`strIngredient${i}`];
    const measure = dish[`strMeasure${i}`];

    if (ingredients && ingredients.trim() !== "") {
      ingredientsArr.push(`${ingredients} - ${measure}`);
    }
  }

  // handle line clamp for h3, instructions, ingredients
  const [h3LineClamp, seth3LineClamp] = useState(true);
  const [instructionsLineClamp, setInstructionsLineClamp] = useState(true);
  const [ingredientsLineClamp, setIngredientsLineClamp] = useState(true);

  const handleH3LineClamp = () => {
    seth3LineClamp(!h3LineClamp);
  }

  const handleInstructionsLineClamp = () => {
    setInstructionsLineClamp(!instructionsLineClamp);
  }

  const handleIngredientsLineClamp = () => {
    setIngredientsLineClamp(!ingredientsLineClamp);
  }


  return (
    <div className="dish-card">
      <figure>
        <img src={dish.strMealThumb} alt={dish.strMeal} title={dish.strMeal} />
      </figure>

      <h3 onClick={handleH3LineClamp} className={h3LineClamp ? "h3-line-clamp" : ""}>{dish.strMeal}</h3>

      <div className="second-div">
        <span><strong>{dish.strCategory}</strong></span>
        <span><em>{dish.strArea}</em></span>
      </div>

      <div className="instructions-container">
        <span className="title">Instructions:</span>
        <p onClick={handleInstructionsLineClamp} className={instructionsLineClamp ? "instructions-line-clamp" : ""}>
          {dish.strInstructions}
        </p>
      </div>

      <div className="ingredients-container">
        <span style={{ display: "block" }} className="title">
          Ingredients:
        </span>

        <div onClick={handleIngredientsLineClamp} className={ingredientsLineClamp ? "ingredients-line-clamp" : ""}>
          {ingredientsArr.map((ingredient, index) => (
            <span key={index}>{ingredient}, </span>
          ))}
        </div>
      </div>

      <div className="resource-container">
        <p>
          <span style={{ marginRight: "5px" }} className="title">
            Watch:
          </span>
          { dish.strYoutube ? 
            <a className="video-link" href={dish.strYoutube} target="blank">
              "{dish.strYoutube}"
            </a> :
            <span>link not available</span>
          }
        </p>

        <p>
          <span style={{ marginRight: "5px" }} className="title">
            Source:
          </span>
          {
            dish.strSource ?
            <a className="source-link" href={dish.strSource} target="blank">
              "{dish.strSource}"
            </a> :
            <span>link not available</span>
          }
        </p>
      </div>

      <div className="btn-container">
        <button>
          Grab it
        </button>
      </div>
    </div>
  );
};

export default Dish;
