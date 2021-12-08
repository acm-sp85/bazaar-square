import React from "react";
import Login from "./Login";
import { useHistory } from "react-router-dom";

function DropDown({ currentUser }) {
  const history = useHistory();
  const logOut = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      history.push("/");
      console.log("logged out");
    });
  };
  return (
    <div>
      {currentUser ? (
        <div>
          <p
            className="link"
            onClick={() => {
              history.push("/manage-items");
            }}
          >
            Manage items
          </p>
          <p
            onClick={() => {
              history.push("/notifications");
            }}
          >
            Notifications
          </p>
          <p
            onClick={() => {
              history.push("/reviews");
            }}
          >
            Your reviews
          </p>
          <br />
          <p onClick={logOut}>Log out</p>
        </div>
      ) : (
        <div>
          <p style={{ display: "flex", justifyContent: "center" }}>
            Not Logged in
          </p>
          <Login />
        </div>
      )}
    </div>
  );
}

export default DropDown;
