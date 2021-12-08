import React from "react";
import "./styles/Home.css";
import Map from "./components/Map";
import LeftComponent from "./components/LeftComponent";
import RightComponent from "./components/RightComponent";

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <div className="home">
      <div></div>
      <Map />
      <div></div>
    </div>
  );
}

export default UnauthenticatedApp;
