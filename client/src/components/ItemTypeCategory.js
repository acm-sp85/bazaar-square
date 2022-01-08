import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function ItemTypeCategory(type) {
  const [results, setResults] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const config = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`/item_types/${type.props.history.location.state}`, config)
      // fetch(`/item_types/2`, config)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // DO BETTER ERROR HANDLING
          console.log("ERROORRRR");
        }
      })
      .then((result) => {
        setResults(result);
      });
  }, [type]);

  return (
    <div>
      {results ? (
        <h1 style={{ textAlign: "center" }}>
          Showing all items for {results.name}
        </h1>
      ) : (
        <></>
      )}
      <div className="items__grid">
        {results ? (
          results.items.map((item) => (
            <ItemCard cardInfo={item} key={item.id} />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ItemTypeCategory;
