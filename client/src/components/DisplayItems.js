import React from "react";
import "../styles/Preview.css";

function DisplayItems({ items }) {
  return (
    <div className="items__grid__preview">
      {items.length ? (
        items.map((item) => (
          <img src={item.image} className="card__image" key={item.id} />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default DisplayItems;
