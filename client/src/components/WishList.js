import React from "react";
import ItemCard from "./ItemCard";

export default function WishList(props) {
  const wished_items = props.currentUser.wishlists;
  return (
    <div>
      <h1>WISHLIST</h1>
      {/* <div className="items__grid"> */}
      <div>
        {wished_items.map((items) => (
          <img
            className="item__card"
            src={items.item_info.image}
            key={items.item_info.id}
          />
          // <p key={items.id}>{items.id}</p>
        ))}
      </div>
    </div>
  );
}
