import React from "react";
import Profile from "./Profile";
import "../styles/Home.css";

function RightComponent({ currentUser, setCurrentUser }) {
  return (
    <div className="right__component">
      <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default RightComponent;
