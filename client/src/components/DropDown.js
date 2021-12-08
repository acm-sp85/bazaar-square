import React from "react";
import Login from "./Login";

function DropDown({ currentUser }) {
  const logOut = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      console.log("logged out");
    });
  };
  return (
    <div>
      {currentUser ? (
        <div>
          <p>Manage items</p>
          <p>Notifications</p>
          <p>Your reviews</p>
          <br />
          <p onClick={logOut}>Log out</p>
        </div>
      ) : (
        <div>
          <p>Not Logged in</p>
          <Login />
        </div>
      )}
    </div>
  );
}

export default DropDown;
