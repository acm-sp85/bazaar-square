import React from "react";
import "./styles/Home.css";
import MapComponent from "./components/MapComponent";
// import Map from "./components/Map.js";
// import credentials from "./credentials";

function UnauthenticatedApp({ setCurrentUser }) {
  // const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

  return (
    <div className="home">
      <h1>HELLO</h1>
    </div>
  );
}

export default UnauthenticatedApp;
