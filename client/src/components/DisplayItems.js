import React, { useState, useEffect } from "react";
import "../styles/Preview.css";

import { useHistory } from "react-router-dom";

function DisplayItems({ items }) {
  const history = useHistory();
  const handleInfo = (e) => {
    e.preventDefault();
    console.log("mec");
    window.location.href = `item/${e.target.id}`;
  };
  return (
    <div className="items__grid__preview">
      {items.length ? (
        items.map((item) => (
          <div key={item.id}>
            {item.image_file ? (
              <img
                src={item.image_file}
                key={item.id}
                id={item.id}
                className="image__card"
                onClick={handleInfo}
              />
            ) : (
              <img
                src={item.image}
                key={item.id}
                id={item.id}
                className="image__card"
                onClick={handleInfo}
              />
            )}
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default DisplayItems;
