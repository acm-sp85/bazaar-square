import React from "react";
import "./styles/Home.css";
import MapComponent from "./components/MapComponent";
import LeftComponent from "./components/LeftComponent";
import RightComponent from "./components/RightComponent";

function Home({ currentUser, setCurrentUser }) {
  return (
    <div>
      <div className="home">
        {/* <MapComponent /> */}
        <RightComponent
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
        />
        <LeftComponent />
      </div>
    </div>
  );
}

export default Home;
