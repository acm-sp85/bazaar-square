import React, { useState, useEffect } from "react";
import "../styles/ItemCard.css";

function ItemCard({ cardInfo, toEdit }) {
  return (
    <div className="item__card">
      <img src={cardInfo.image} className="image__card" />
      <h3>{cardInfo.item_name}</h3>
      <p>
        <strong> Category:</strong> {cardInfo.category_name}
      </p>
      <p>
        <strong> Location:</strong> {cardInfo.location}
      </p>
      <p>
        <strong> User:</strong> {cardInfo.owner}
      </p>
      {toEdit ? <p>editable</p> : <></>}
    </div>
  );
}

export default ItemCard;
