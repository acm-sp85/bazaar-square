import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function ItemTypeCategory(type) {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const config = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`/item_types/${type.props.history.location.state}`, config)
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
  }, []);
  return (
    <div>
      {results ? <h1>Showing all:</h1> : <></>}
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
