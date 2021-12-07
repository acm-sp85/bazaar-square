import React from "react";
import Profile from "./components/Profile";

function AuthenticatedApp({ currentUser, setCurrentUser }) {
  const logOut = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      console.log("logged out");
    });
  };
  return (
    <div>
      <h1>AUTHENTICATED</h1>
      <button onClick={logOut}>Logout</button>
      <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default AuthenticatedApp;