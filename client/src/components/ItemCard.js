import React from "react";
import "../styles/ItemCard.css";

function ItemCard({ cardInfo }) {
  return (
    <div className="item__card">
      <p>{cardInfo.item_name}</p>
    </div>
  );
}

export default ItemCard;
