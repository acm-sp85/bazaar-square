import React from "react";
import Profile from "./Profile";
import "../styles/Home.css";

function LeftComponent({ currentUser, setCurrentUser }) {
  return (
    <div className="right__component">
      {/* <h1 className="right__component">RIGHT</h1> */}
      <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </div>
  );
}

export default LeftComponent;
