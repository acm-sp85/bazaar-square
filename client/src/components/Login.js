import React, { useState, useEffect } from "react";
import { FormGroup } from "@mui/material";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import "../styles/Login.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("");
  const history = useHistory();
  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user);
          setCurrentUser(user);
        });
      } else {
        console.log("User is not logged in");
      }
    });
  }, []);

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

  const signUp = () => {};

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
    </div>
  );
}

export default App;
