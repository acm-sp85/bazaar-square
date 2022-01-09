import React, { useState, useEffect } from "react";

import Wish from "./Wish";

export default function WishList(props) {
  const [wished_items, setWished_items] = useState(null);

  useEffect(() => {
    setWished_items(props.currentUser.wishlists);
  }, [props]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>WISHLIST</h1>
      {wished_items ? (
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
      ) : (
        <></>
      )}
    </div>
  );
}
