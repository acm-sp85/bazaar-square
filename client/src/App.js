import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthenticatedApp from "./AuthenticatedApp";
import Header from "./components/Header";
import HomeAuthenticated from "./HomeAuthenticated";
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
      <Header currentUser={currentUser} />
      {/* categories carousel */}
      {currentUser ? (
        <div>
          <HomeAuthenticated
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
          {/* TO BE COMBINED WITH HomeAuthenticated in the future */}
          {/* <AuthenticatedApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          /> */}
        </div>
      ) : (
        <UnauthenticatedApp setCurrentUser={setCurrentUser} />
      )}

      {/* search page */}

      {/* footer */}
    </BrowserRouter>
  );
}

export default App;
