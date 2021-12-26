import React from "react";
import "./styles/Home.css";
import MapComponent from "./components/MapComponent";

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <div className="home">
      <div></div>
      <MapComponent />
      <div></div>
    </div>
  );
}

export default UnauthenticatedApp;
