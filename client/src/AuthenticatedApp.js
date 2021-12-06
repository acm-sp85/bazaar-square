import React from "react";

function AuthenticatedApp({ setCurrentUser }) {
  const logOut = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      console.log("logged out");
    });
  };
  return (
    <div>
      <h1>AUTHENTICATED</h1>
      <button onClick={logOut}>Logout</button>
    </div>
  );
}

export default AuthenticatedApp;
