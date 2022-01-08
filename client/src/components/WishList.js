import React from "react";

import Wish from "./Wish";

export default function WishList(props) {
  const wished_items = props.currentUser.wishlists;

  return (
    <div>
      <h1>WISHLIST</h1>
      <div className="wishlist__grid">
        {wished_items.map((item) => (
          <Wish info={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
