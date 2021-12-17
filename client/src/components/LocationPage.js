import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function LocationPage(city) {
  const [results, setResults] = useState(null);
  useEffect(() => {
    const config = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    console.log(city.props.history.location.state);
    fetch(`/items/location/${city.props.history.location.state}`, config)
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
      <h1>Location page</h1>
      <div className="items__grid">
        {results ? (
          results.map((item) => <ItemCard cardInfo={item} key={item.id} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default LocationPage;
