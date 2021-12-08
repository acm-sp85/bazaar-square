import React, { useState, useEffect } from "react";
import "../App.css";
import DisplayItems from "./DisplayItems";

function Profile(props) {
  const [currentUser, setCurrentUser] = useState(props.currentUser);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [items, setItems] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user);
          setCurrentUser(user);
          setUserName(user.user_name);
          setPhone(user.phone);
          setCity(user.location);
          setEmail(user.email);
          setItems(user.items);
        });
      } else {
        console.log("Couldn't access User's info");
      }
    });
  }, []);

  return (
    <div>
      <h3>{userName}</h3>
      <h3>{phone}</h3>
      <h3>{city}</h3>
      <h3>{email}</h3>
      <DisplayItems items={items} />
    </div>
  );
}
export default Profile;
