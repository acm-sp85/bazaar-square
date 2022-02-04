import React from "react";

import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import ItemTypesCarousel from "./ItemTypesCarousel";
import CategoriesCarousel from "./CategoriesCarousel";
import AreasCarousel from "./AreasCarousel";

function Home({ currentUser, setCurrentUser, categories, cities }) {
  return (
    <div className="home">
      <h1 style={{ textAlign: "center" }}>
        Welcome {currentUser.user_name}!
      </h1>
      <h3 variant="body1" style={{ textAlign: "center", color: "grey" }}>
        Random Bazaar is a market place to share goods with your community.
      </h3>
      <h4 variant="body1" style={{ textAlign: "center", color: "grey" }}>
        Donate, borrow, trade or sell your goods in our platform.
      </h4>

      <ItemTypesCarousel />
      <br />
      <h3>Categories:</h3>
      <CategoriesCarousel categories={categories} />
      <br />
      <h3>Areas:</h3>
      <AreasCarousel cities={cities} />
      <LeftComponent />
      <RightComponent
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
      />
    </div>
  );
}

export default Home;
