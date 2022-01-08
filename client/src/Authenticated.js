import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./styles/Home.css";

import ManageItems from "./components/ManageItems";
import Notifications from "./components/Notifications";
import Reviews from "./components/Reviews";
import SearchResults from "./components/SearchResults";
import EditItem from "./components/EditItem";
import CategoryPage from "./components/CategoryPage";
import LocationPage from "./components/LocationPage";
import UserProfilePublic from "./components/UserProfilePublic";
import ItemInfo from "./components/ItemInfo";
import Home from "./components/Home";
import Header from "./components/Header";
import AddReview from "./components/AddReview";
import ItemTypeCategory from "./components/ItemTypeCategory";
import MessageSend from "./components/MessageSend";
import WishList from "./components/WishList";
import Footer from "./components/Footer";

function Authenticated({
  currentUser,
  setCurrentUser,
  categories,
  cities,
  logOut,
}) {
  return (
    <>
      <BrowserRouter>
        <Header
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          logOut={logOut}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                props={props}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                categories={categories}
                cities={cities}
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
          <Route
            exact
            path="/messager"
            render={(props) => (
              <MessageSend
                props={props}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            )}
          />
          <Route
            exact
            path="/wishlist"
            render={(props) => (
              <WishList
                props={props}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
              />
            )}
          />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Authenticated;
