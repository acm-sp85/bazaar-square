import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function CategoryPage(categoryIndex) {
  const [results, setResults] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const config = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(
      `/items/category/${categoryIndex.props.history.location.state}`,
      config
    )
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
  }, [categoryIndex]);

  return (
    <div>
      {results ? (
        <h1 style={{ textAlign: "center" }}>
          Showing all {results[0].category_name}
        </h1>
      ) : (
        <></>
      )}
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

export default CategoryPage;
