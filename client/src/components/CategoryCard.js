import React from "react";
import "../styles/CategoryCard.css";
import { useHistory } from "react-router-dom";

function CategoryCard(category) {
  const history = useHistory();
  const handleClick = () => {
    console.log("go search: " + category.category_id);
    history.push({
      pathname: "/category",
      state: category.category_id,
    });
  };

  return (
    <div>
      <div className="category__card" onClick={handleClick}>
        <p>{category.category_name}</p>
        <img className="image" src={category.category_hero_image} />
      </div>
    </div>
  );
}

export default CategoryCard;
