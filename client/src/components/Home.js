import React from "react";

import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import ItemTypesCarousel from "./ItemTypesCarousel";
import CategoriesCarousel from "./CategoriesCarousel";
import AreasCarousel from "./AreasCarousel";

function Home({ currentUser, setCurrentUser, categories, cities }) {
  return (
    <div className="home">
      <h3 variant="body1" style={{ textAlign: "center" }}>
        Random Bazaar is a market place to share goods with your community.
      </h3>
      <h4 variant="body1" style={{ textAlign: "center" }}>
        Donate, borrow , trade or sell your goods in our platform.
      </h4>

      <ItemTypesCarousel />
      <br />
      <h3>Categories:</h3>
      <CategoriesCarousel categories={categories} />
      <br />
      <h3>Areas:</h3>
      <AreasCarousel cities={cities} />
      <RightComponent
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
      />
      <LeftComponent />
    </div>
  );
}

export default Home;
