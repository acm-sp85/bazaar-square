import React from "react";
import Login from "./Login";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

function DropDown(props) {
  const history = useHistory();

  return (
    <div>
      {props.currentUser ? (
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
          <p
            onClick={() => {
              history.push("/wishlist");
            }}
          >
            Your Wishlist
          </p>
          <br />
          <p onClick={props.logOut}>Log out</p>
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
