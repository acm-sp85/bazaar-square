import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthenticatedApp from "./AuthenticatedApp";
import Header from "./components/Header";
import HomeAuthenticated from "./HomeAuthenticated";
import UnauthenticatedApp from "./UnauthenticatedApp";
import Signup from "./components/Signup";
import ManageItems from "./components/ManageItems";
import Notifications from "./components/Notifications";
import Reviews from "./components/Reviews";
import CategoriesCarousel from "./components/CategoriesCarousel";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthChecked(true);
          console.log(user);
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

          console.log(categories);
        });
      }
    });
  }, []);

  if (!authChecked) {
    return <div></div>;
  }

  return (
    <BrowserRouter>
      <Header currentUser={currentUser} />

      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <div className="in__margin">
              {currentUser ? (
                <div>
                  <HomeAuthenticated
                    setCurrentUser={setCurrentUser}
                    currentUser={currentUser}
                  />
                </div>
              ) : (
                <UnauthenticatedApp setCurrentUser={setCurrentUser} />
              )}
              <CategoriesCarousel categories={categories} />
            </div>
          )}
        />
        <Route
          exact
          path="/signup"
          render={(props) => (
            <Signup
              props={props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
        <Route
          exact
          path="/manage-items"
          render={(props) => (
            <ManageItems
              props={props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
        <Route
          exact
          path="/notifications"
          render={(props) => (
            <Notifications
              props={props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
        <Route
          exact
          path="/reviews"
          render={(props) => (
            <Reviews
              props={props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
      </Switch>

      {/* categories carousel */}
      {/* search page */}

      {/* footer */}
    </BrowserRouter>
  );
}

export default App;
