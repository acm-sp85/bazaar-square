import React from "react";
import "./styles/Home.css";
import { useHistory } from "react-router-dom";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function UnauthenticatedApp({ setCurrentUser }) {
  const history = useHistory();
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signup">
          <Signup setCurrentUser={setCurrentUser} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default UnauthenticatedApp;
