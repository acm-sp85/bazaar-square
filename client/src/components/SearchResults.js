import React, { useState, useEffect } from "react";

function SearchResults(props) {
  const [results, setResults] = useState(null);
  let inheritedResults = props.props.history.location.state

  useEffect(() => {
    console.log(inheritedResults);
    inheritedResults? setResults(inheritedResults) : console.log("no state")
  }, []);

  return (
    <div>
      <h1>SEARCH RESULTS</h1>
      {results ? <p>results are in</p> : <></>}
    </div>
  );
}

export default SearchResults;
