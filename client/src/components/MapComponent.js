import React, { useState, useEffect } from "react";
import "../styles/Map.css";

function MapComponent() {
  return (
    <div className="map">
      <img
        className="image__map"
        src="https://www.techlicious.com/images/misc/google-maps-traffic-670px.jpg"
      />
    </div>
  );
}

export default MapComponent;
