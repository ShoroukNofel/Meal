import React from "react";
import "../pages/Home.css";

function CategoryTabs({ categories, selected, onSelect }) {
  return (
    <div className="tabs-container">
      <button
        onClick={() => onSelect("All")}
        className={`tab ${selected === "All" ? "active" : ""}`}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat.idCategory}
          onClick={() => onSelect(cat.strCategory)}
          className={`tab ${selected === cat.strCategory ? "active" : ""}`}
        >
          {cat.strCategory}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
