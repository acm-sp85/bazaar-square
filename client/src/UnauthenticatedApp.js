import React from "react";
import "./styles/Home.css";
import { useHistory } from "react-router-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Reviews from "./components/Reviews";
import SearchResults from "./components/SearchResults";

import CategoryPage from "./components/CategoryPage";
import LocationPage from "./components/LocationPage";
import UserProfilePublic from "./components/UserProfilePublic";
import ItemInfo from "./components/ItemInfo";
import Home from "./components/Home";
import Header from "./components/Header";

import ItemTypeCategory from "./components/ItemTypeCategory";

function UnauthenticatedApp({ setCurrentUser, categories, cities }) {
  const history = useHistory();
  return (
    <div>
    
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/signup">
            <Signup setCurrentUser={setCurrentUser} />
          </Route>
          {/* <Route
            exact
            path="/"
            render={(props) => (
              <Home props={props} categories={categories} cities={cities} />
            )}
          />

          <Route
            exact
            path="/reviews"
            render={(props) => <Reviews props={props} />}
          />
          <Route
            exact
            path="/search"
            render={(props) => <SearchResults props={props} />}
          />

          <Route
            exact
            path="/location"
            render={(props) => <LocationPage props={props} />}
          />
          <Route
            exact
            path="/category"
            render={(props) => <CategoryPage props={props} />}
          />
          <Route
            exact
            path="/user-profile"
            render={(props) => <UserProfilePublic props={props} />}
          />
          <Route
            exact
            path="/item-info"
            render={(props) => <ItemInfo props={props} />}
          />

          <Route
            exact
            path="/item-type"
            render={(props) => <ItemTypeCategory props={props} />}
          /> */}

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default UnauthenticatedApp;
