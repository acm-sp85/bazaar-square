import React from "react";
import ItemCard from "./ItemCard";

export default function WishList(props) {
  const wished_items = props.currentUser.wishlists;
  return (
    <div>
      <h1>WISHLIST</h1>
      <div className="items__grid">
        {wished_items.map((items) => (
          <ItemCard cardInfo={items.item_info} key={items.id} />
        ))}
      </div>
    </div>
  );
}
