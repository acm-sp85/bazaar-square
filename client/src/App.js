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

  // TEMPORARY FAKE-LOGING
  const login = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // user_name: email,
        // password: password,
      }),
    };

    fetch("/login", requestOptions).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          console.log(user);
        });
      } else {
        response.json().then((error) => {
          console.log(error);
        });
      }
    });
  };

  return (
    // BEM convention
    <div className="app">
      <h1>Bazaar Square</h1>
      <button onClick={login}>LogIn</button>
    </div>
  );
}

export default App;
