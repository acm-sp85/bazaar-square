import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function UserProfilePublic(owner_id) {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const config = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    console.log(owner_id);

    fetch(`/users/${owner_id.props.history.location.state}`, config)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // DO BETTER ERROR HANDLING
          console.log("ERROORRRR");
        }
      })
      .then((result) => {
        setResults(result.items);
      });
  }, []);

  return (
    <div>
      <h1>Public Profile</h1>
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

export default UserProfilePublic;
