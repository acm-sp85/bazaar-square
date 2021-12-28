import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

//THIS IS LEGACY CODE AND DOESN'T RUN WITH REACT 17, NEEDS TO BE UPDATED

function Map(props) {
  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
      />
    </div>
  );
}

export default withScriptjs(withGoogleMap(Map));
