
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMealDetails } from "../api/mealAPI";
import "./MealDetails.css";

function MealDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMeal() {
      setLoading(true);
      setError("");
      const data = await getMealDetails(id);

      if (!data) {
        setError("Meal not found or invalid ID.");
        setMeal(null);
      } else {
        setMeal(data);
      }

      setLoading(false);
    }

    fetchMeal();
  }, [id]);

  function getIngredients(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  }

  if (loading) {
    return <p className="loading">Loading meal details...</p>;
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>{error}</h2>
        <button onClick={() => navigate(-1)}>🔙 Go Back</button>
      </div>
    );
  }

  const ingredients = getIngredients(meal);

  return (
    <div className="meal-details">
      <h1 className="meal-title">{meal.strMeal}</h1>

      <div className="meal-grid">
        {/* العمود الأول: صورة + أزرار تحت الصورة */}
        <div className="meal-image-container">
          <div className="meal-image">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
          <div className="meal-buttons">
            {meal.strYoutube && (
              <a href={meal.strYoutube} target="_blank" rel="noreferrer" className="btn btn-youtube">
                ▶️ YouTube
              </a>
            )}
            {meal.strSource && (
              <a href={meal.strSource} target="_blank" rel="noreferrer" className="btn btn-source">
                🌐 Source
              </a>
            )}
          </div>
        </div>

        {/* العمود الثاني: التعليمات */}
        <div className="meal-instructions">
          <h2>Instructions</h2>
          <p>{meal.strInstructions}</p>
        </div>

        {/* العمود الثالث: المكونات */}
        <div className="meal-ingredients">
          <h2>Ingredients</h2>
          <table>
            <tbody>
              {ingredients.map((item, index) => (
                <tr key={index}>
                  <td>{item.ingredient}</td>
                  <td>{item.measure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MealDetails;
