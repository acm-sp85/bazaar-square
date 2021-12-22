import { setRef } from "@mui/material";
import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";


function SearchResults(search) {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const config = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`/items/find/${search.props.history.location.state}`, config)
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
  }, [search]);

  return (
    <div>
      <h1>SEARCH RESULTS</h1>
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

export default SearchResults;
