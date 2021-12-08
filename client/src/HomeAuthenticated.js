import React from "react";
import "./styles/Home.css";
import Map from "./components/Map";
import LeftComponent from "./components/LeftComponent";
import RightComponent from "./components/RightComponent";

function Home({ currentUser, setCurrentUser }) {
  return (
    <div>
      <div className="home">
        <LeftComponent />
        <Map />
        <RightComponent
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
        />
      </div>
    </div>
  );
}

export default Home;
