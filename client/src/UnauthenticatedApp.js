import React from "react";
import "./styles/Home.css";
import { useHistory } from "react-router-dom";

function UnauthenticatedApp({ setCurrentUser }) {
  const history = useHistory();
  return (
    <div className="home">
      <h3
        style={{ textAlign: "center" }}
        onClick={() => {
          history.push("/login");
        }}
        className="link"
      >
        Sign in to fully enjoy our platform!
      </h3>
    </div>
  );
}

export default UnauthenticatedApp;
