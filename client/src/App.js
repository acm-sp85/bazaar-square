import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    fetch("/items", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user);
        });
      } else {
        console.log("error");
      }
    });
  }, []);

  // TEMPORARY FAKE-LOGING
  // const login = (e) => {
  //   e.preventDefault();

  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       // user_name: email,
  //       // password: password,
  //     }),
  //   };

  //   fetch("/login", requestOptions).then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => {
  //         console.log(user);
  //       });
  //     } else {
  //       response.json().then((error) => {
  //         console.log(error);
  //       });
  //     }
  //   });

  //   fetch("/me").then((response) => {
  //     response.json().then((x) => {
  //       console.log(x);
  //     });
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    // BEM convention
    <div className="app">
      <h1>Bazaar Square</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="custom-imputs"
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="custom-imputs"
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>LOGIN</button>
      </form>
      {/* <button onClick={login}>LogIn</button> */}
    </div>
  );
}

export default App;
