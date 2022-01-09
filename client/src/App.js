import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Authenticated from "./Authenticated";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthChecked(true);
        });
      } else {
        setAuthChecked(true);
      }
    });
    fetch("/categories", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((categories) => {
          setCategories(categories);
        });
      }
    });
    fetch("/cities", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((cities) => {
          setCities(cities);
        });
      }
    });
  }, []);

  if (!authChecked) {
    return <div></div>;
  }
  const logOut = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      setCurrentUser(null);
    });
  };

  return (
    <>
      <BrowserRouter>
        {currentUser ? (
          <Authenticated
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
            categories={categories}
            cities={cities}
            logOut={logOut}
          />
        ) : (
          <UnauthenticatedApp
            setCurrentUser={setCurrentUser}
            categories={categories}
            cities={cities}
          />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
