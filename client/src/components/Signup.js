import React, { useState } from "react";
import { FormGroup } from "@mui/material";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

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
          history.push("/");
        });
      } else {
        response.json().then((error) => {
          setError(error.errors);
        });
      }
    });
  };

  const handleBorough = (e) => {
    setCity(e.target.value);
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

        <h3>SIGNUP</h3>
        <br />
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
            type="email"
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
                  <p style={{ color: "red" }}>{e}</p>
                ))}
              </p>
            </React.Fragment>
          ) : (
            <React.Fragment> </React.Fragment>
          )}
          <Button
            className="custom-button"
            type="submit"
            onClick={handleSubmit}
          >
            SIGNUP
          </Button>
          <a
            href="/"
            style={{
              fontSize: "10px",
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            - Login -
          </a>
        </FormGroup>
      </div>
    </div>
  );
}
export default Signup;
