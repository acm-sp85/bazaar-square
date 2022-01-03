import React from "react";
import Login from "./Login";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

function DropDown({ currentUser, setCurrentUser }) {
  const history = useHistory();
  const logOut = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      setCurrentUser([]);
      history.push("/");
      console.log("logged out");
    });
  };
  return (
    <div>
      {currentUser ? (
        <div>
          <p
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
          <Button href="/login" style={{ display: "flex" }}>
            Login
          </Button>
          <Button href="/signup" style={{ display: "flex" }}>
            Signup
          </Button>
        </div>
      )}
    </div>
  );
}

export default DropDown;
