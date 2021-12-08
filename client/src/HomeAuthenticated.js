import React from "react";
import "./styles/Home.css";
import Map from "./components/Map";
import LeftComponent from "./components/LeftComponent";
import RightComponent from "./components/RightComponent";

function Home() {
  return (
    <div className="home">
      <LeftComponent />
      <Map />
      <RightComponent />
    </div>
  );
}

export default Home;
