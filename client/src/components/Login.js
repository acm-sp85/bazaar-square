import React, { useState, useEffect } from "react";
import { FormGroup } from "@mui/material";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import "../styles/Login.css";
import { red } from "@mui/material/colors";

function Login({ setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch("/login", requestOptions).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setCurrentUser(user);
          history.push("/");
        });
      } else {
        response.json().then((error) => {
          setError(error.error);
          console.log(error);
        });
      }
    });
  };

  return (
    <div className="landing__container">
      <div className="centered">
        <img
          className="header__icon"
          onClick={() => {
            history.push("/");
          }}
          src="https://dcassetcdn.com/design_img/3096767/681086/681086_17136101_3096767_2dbcc4ed_image.png"
          alt=""
        />
        <h3 variant="body1" style={{ textAlign: "center", color: "grey" }}>
          Random Bazaar is a market place to share goods with your community.
        </h3>
        <h4
          variant="body1"
          style={{ textAlign: "center", color: "grey", marginBottom: "50px" }}
        >
          Donate, borrow, trade or sell your goods in our platform.
        </h4>
        <h4
          variant="body1"
          style={{ textAlign: "center", color: "grey", marginBottom: "50px" }}
        >
          Log in or Sign up to enjoy the full experience.
        </h4>
        <FormGroup onSubmit={handleSubmit} className="form__box">
          <input
            className="custom__imputs"
            type="text"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className="custom__imputs"
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <Button onClick={handleSubmit}>LOGIN</Button>
        </FormGroup>
        <a
          href="/signup"
          style={{
            fontSize: "10px",
            textDecoration: "none",
            color: "black",
            cursor: "pointer",
          }}
        >
          - Sign up -
        </a>
        {error ? (
          <p style={{ textAlign: "center", color: "red" }}>{error}</p>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Login;
