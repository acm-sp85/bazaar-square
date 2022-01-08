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
    <div className="centered">
      <FormGroup onSubmit={handleSubmit} className="form__box">
        <input
          className="custom__imputs"
          type="text"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="custom__imputs"
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleSubmit}>LOGIN</Button>
      </FormGroup>
      <Button
        href="/signup"
        style={{ display: "flex", justifyContent: "center" }}
      >
        SIGN UP
      </Button>
      {error ? (
        <p style={{ textAlign: "center", color: "red" }}>{error}</p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Login;
