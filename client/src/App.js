import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("/items", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user);
        });
      } else {
        console.log("error");
      }
    });
  }, []);

  return (
    // BEM convention
    <div className="app">
      <h1>Bazaar Square</h1>
    </div>
  );
}

export default App;
