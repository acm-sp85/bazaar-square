import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomeAuthenticated from "./HomeAuthenticated";
import UnauthenticatedApp from "./UnauthenticatedApp";
import Signup from "./components/Signup";
import ManageItems from "./components/ManageItems";
import Notifications from "./components/Notifications";
import Reviews from "./components/Reviews";
import CategoriesCarousel from "./components/CategoriesCarousel";
import SearchResults from "./components/SearchResults";
import EditItem from "./components/EditItem";
import CategoryPage from "./components/CategoryPage";
import LocationPage from "./components/LocationPage";
import UserProfilePublic from "./components/UserProfilePublic";
import ItemInfo from "./components/ItemInfo";
import Login from "./components/Login";
import Footer from "./components/Footer";
import AddReview from "./components/AddReview";
import ItemTypeCategory from "./components/ItemTypeCategory";
import ItemTypesCarousel from "./components/ItemTypesCarousel";
import AreasCarousel from "./components/AreasCarousel";

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

  return (
    <BrowserRouter>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />

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
              <ItemTypesCarousel />
              <br />
              <h3>Categories:</h3>
              <CategoriesCarousel categories={categories} />
              <br />
              <h3>Areas:</h3>
              <AreasCarousel cities={cities} />
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
          path="/login"
          render={(props) => (
            <Login
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
        <Route
          exact
          path="/search"
          render={(props) => (
            <SearchResults
              props={props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
        <Route
          exact
          path="/edit"
          render={(props) => (
            <EditItem
              props={props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
        <Route
          exact
          path="/location"
          render={(props) => (
            <LocationPage
              props={props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
        <Route
          exact
        path="/category"
          render={(props) => (
            <CategoryPage
              props={props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
        <Route
          exact
          path="/user-profile"
          render={(props) => (
            <UserProfilePublic
              props={props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
        <Route
          exact
          path="/item-info"
          render={(props) => (
            <ItemInfo
              props={props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
        <Route
          exact
          path="/add-review"
          render={(props) => (
            <AddReview
              props={props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
        <Route
          exact
          path="/item-type"
          render={(props) => (
            <ItemTypeCategory
              props={props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
