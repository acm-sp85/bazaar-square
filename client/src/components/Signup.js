import React, { useState } from "react";
import { FormGroup } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "../App.css";

function Signup({ setCurrentUser }) {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Creating user");

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_name: userName,
        password,
        password_confirmation: passwordConfirmation,
        email,
        phone,
        city_id: city,
      }),
    };

    fetch("/users", requestOptions).then((response) => {
      if (response.ok) {
        response.json().then((info) => {
          setCurrentUser(info);
        });
      } else {
        response.json().then((error) => {
          console.log(error.errors);
          setError(error.errors);
          console.log(error);
        });
      }
    });
  };

  const handleBorough = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="centered">
      <h3>SIGNUP</h3>
      <FormGroup onSubmit={handleSubmit}>
        <input
          className="custom-imputs"
          type="text"
          placeholder="Name..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input
          className="custom-imputs"
          type="text"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="custom-imputs"
          type="text"
          placeholder="Phone..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <br />

        <select value={city} onChange={handleBorough}>
          <option value="nill">Borough</option>
          <option value="1">Manhattan</option>
          <option value="2">Brooklyn</option>
          <option value="3">Queens</option>
          <option value="4">Bronx</option>
          <option value="5">Staten Island</option>
        </select>

        <br />
        <input
          className="custom-imputs"
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          className="custom-imputs"
          type="password"
          placeholder="Confirm Password..."
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br />
        <br />
        {error ? (
          <React.Fragment>
            <p className="error">
              {error.map((e) => (
                <p>{e}</p>
              ))}
            </p>
          </React.Fragment>
        ) : (
          <React.Fragment> </React.Fragment>
        )}
        <Button className="custom-button" type="submit">
          SIGNUP
        </Button>
        <p>{/* <Link to="/login">Log in</Link> */}</p>
      </FormGroup>
    </div>
  );
}
export default Signup;
