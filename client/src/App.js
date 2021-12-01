import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName);
    console.log(password);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_name: userName,
        password: password,
      }),
    };
    fetch("/login", requestOptions).then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setCurrentUser(user);
          // history.push("/customers");
        });
      } else {
        response.json().then((error) => {
          setError(error.error);
          console.log(error);
        });
      }
    });
  };

  const logOut = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      console.log("logged out");
    });
  };

  return (
    // BEM convention
    <div className="app">
      <h1>Bazaar Square</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="custom-imputs"
          type="text"
          placeholder="Username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
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
      <button onClick={logOut}>LogOut</button>
    </div>
  );
}

export default App;
