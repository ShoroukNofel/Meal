import React from "react";
import { useNavigate } from "react-router-dom";
import "./MealCard.css";

function MealCard({ meal }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/meal/${meal.idMeal}`);
  };

  return (
    <div className="meal-card">
      <div className="meal-img-wrapper" onClick={handleClick}>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <h3>{meal.strMeal}</h3>
      <button className="view-btn" onClick={handleClick}>
        View Recipe
      </button>
    </div>
  );
}

export default MealCard;
