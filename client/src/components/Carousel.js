import React from "react";
import "../styles/Home.css";
import CategoryCard from "./CategoryCard";

function Carousel({ section }) {
  return (
    <div className="carousel__card">
      {section.map((category) => (
        <CategoryCard
          category_name={section.name}
          //   category_hero_image={section.items[0].image}
          category_id={section.id}
          key={section.id}
        />
      ))}
    </div>
  );
}

export default Carousel;
