import React from "react";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import ItemTypesCarousel from "./ItemTypesCarousel";
import CategoriesCarousel from "./CategoriesCarousel";
import AreasCarousel from "./AreasCarousel";

function Home({ currentUser, setCurrentUser, categories, cities }) {
  return (
    <div className="home">
      <RightComponent
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
      />
      <LeftComponent />
      <ItemTypesCarousel />
      <br />
      <h3>Categories:</h3>
      <CategoriesCarousel categories={categories} />
      <br />
      <h3>Areas:</h3>
      <AreasCarousel cities={cities} />
    </div>
  );
}

export default Home;
