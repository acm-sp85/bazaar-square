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
          <a href="/manage-items" className="dropdown__links">Manage items</a>
          <br />
          <a href="/notifications" className="dropdown__links">Notifications</a>
          <br />
          <a href="/reviews" className="dropdown__links">Your reviews</a>
          <br />
          <a href="/wishlist" className="dropdown__links">Your wishlist</a>
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
