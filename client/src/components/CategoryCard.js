import React from "react";
import "../styles/CategoryCard.css";

function CategoryCard(category) {
  return (
    <div>
      <div className="category__card">
        <p>{category.category_name}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
