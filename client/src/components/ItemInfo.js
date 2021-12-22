import React, { useState, useEffect } from "react";

function ItemInfo(info) {
  const [itemInfo, setItemInfo] = useState(info);

  useEffect(() => {
    fetch(`/items/${info.props.history.location.state}`, {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((item_info) => {
          setItemInfo(item_info);
        });
      }
    });
  }, []);

  return (
    <div>
      <h1>ITEM INFO</h1>
      <p>{itemInfo.item_name}</p>
      <img src={itemInfo.image} />
    </div>
  );
}

export default ItemInfo;
