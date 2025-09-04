import React, { useEffect, useState } from "react";
import {
  getCategories,
  getMealsByCategory,
  searchMeals,
} from "../api/mealAPI";
import CategoryTabs from "../components/CategoryTabs";
import MealCard from "../components/MealCard";
import "./Home.css";

function Home() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const cats = await getCategories();
      setCategories(cats);
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchMeals() {
      let mealsData = [];

      if (selectedCategory === "All") {
        mealsData = await searchMeals("");
      } else {
        mealsData = await getMealsByCategory(selectedCategory);
      }

      setMeals(mealsData);
    }

    fetchMeals();
  }, [selectedCategory]);

  return (
    <div style={{ padding: 20 }}>
      <h1 className="site-title">
        Recipe <span className="leaf">🍃</span>
      </h1>
      <p className="tagline">Learn, Cook, Eat Your Food.</p>

      <CategoryTabs
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="meals-grid">
        {meals.length > 0 ? (
          meals.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)
        ) : (
          <p>No meals found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
