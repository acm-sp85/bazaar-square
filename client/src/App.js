import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

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
  }, []);

  if (!authChecked) {
    return <div></div>;
  }

  return (
    <BrowserRouter>
      {/* home */}
      {/* header */}
      {/* map */}
      {/* categories carousel */}
      {currentUser ? (
        <AuthenticatedApp
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
        />
      ) : (
        <UnauthenticatedApp setCurrentUser={setCurrentUser} />
      )}

      {/* search page */}

      {/* footer */}
    </BrowserRouter>
  );
}

export default App;
