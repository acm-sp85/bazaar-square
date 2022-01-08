import React, { useState } from "react";

import Wish from "./Wish";

export default function WishList(props) {
  const [wished_items, setWished_items] = useState(props.currentUser.wishlists);

  return (
    <div>
      <h1>WISHLIST</h1>
      <div className="wishlist__grid">
        {wished_items.map((item) => (
          <Wish
            info={item}
            setWished_items={setWished_items}
            wished_items={wished_items}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
