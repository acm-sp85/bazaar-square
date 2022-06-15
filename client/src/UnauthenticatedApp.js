import React from 'react';
import './styles/Home.css';
import { useHistory } from 'react-router-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

import Reviews from './components/Reviews';
import SearchResults from './components/SearchResults';

import CategoryPage from './components/CategoryPage';
import LocationPage from './components/LocationPage';
import UserProfilePublic from './components/UserProfilePublic';
import ItemInfo from './components/ItemInfo';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import ItemTypeCategory from './components/ItemTypeCategory';

function UnauthenticatedApp({ setCurrentUser, categories, cities }) {
  const history = useHistory();
  const guestUser = {
    email: 'admin@gmail.com',
    id: 0,
    items: [],
    location: 'Manhattan',
    phone: '000',
    rating_average: null,
    received_messages: [{}],
    reviews: [],
    sent_messages: [],
    user_name: 'guest',
    wishlists: [],
  };
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/signup">
            <Signup setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/login">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home props={props} categories={categories} cities={cities} />
            )}
          />

          <Route
            exact
            path="/search"
            render={(props) => <SearchResults props={props} />}
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
          />
          <Route
            exact
            path="/item/:id"
            render={(props) => (
              <ItemInfo props={props} currentUser={guestUser} />
            )}
          />

          <Redirect to="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default UnauthenticatedApp;
