import React, { useState, useEffect } from "react";
import "../styles/Preview.css";

import { useHistory } from "react-router-dom";

function DisplayItems({ items }) {
  const history = useHistory();
  const handleInfo = (e) => {
    e.preventDefault();
    // window.location.href = "manage-items";
    history.push({
      pathname: "/item-info",
      state: e.target.id,
    });
  };
  return (
    <div className="items__grid__preview">
      {items.length ? (
        items.map((item) => (
          <img
            src={item.image}
            className="card__image"
            id={item.id}
            key={item.id}
            onClick={handleInfo}
          />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default DisplayItems;
