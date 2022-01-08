import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import DisplayItems from "./DisplayItems";

function LeftComponent() {
  const [lastItemsAdded, setLastItemsAdded] = useState("");

  useEffect(() => {
    fetch("/items/find/last-added", {
      credentials: "include",
    }).then((response) => {
      if (response.ok) {
        response.json().then((last_items_added) => {
          setLastItemsAdded(last_items_added);
        });
      } else {
        response.json().then((error) => {
          console.log(error);
        });
      }
    });
  }, []);

  return (
    <div className="left__component">
      <h3>These are the latest items added to Random Bazaar:</h3>
      <DisplayItems items={lastItemsAdded} />
    </div>
  );
}

export default LeftComponent;
