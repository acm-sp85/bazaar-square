import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function ManageItems({ currentUser }) {

  return (
    <div>
      <h1>MANAGE ITEMS</h1>
      <div className="items__grid">
        {currentUser.items.map((item) => (
          <ItemCard cardInfo={item} toEdit={true} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default ManageItems;
