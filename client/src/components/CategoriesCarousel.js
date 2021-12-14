import React from "react";
import "../styles/Home.css";
import CategoryCard from "./CategoryCard";

function CategoriesCarousel({ categories }) {
  return (
    <div className="carousel__card">
      {categories.map((category) => (
        <CategoryCard
          category_name={category.category_name}
          category_hero_image={category.items[0].image}
          category_id={category.id}
          key={category.id}
        />
      ))}
    </div>
  );
}

export default CategoriesCarousel;
