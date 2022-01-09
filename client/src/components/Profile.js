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
  const [lastItemsAdded, setLastItemsAdded] = useState("");
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
          setLastItemsAdded(user.items.reverse().slice(0, 6));
        });
      } else {
        console.log("Couldn't access User's info");
      }
    });
  }, []);

  return (
    <div>
      {lastItemsAdded.length > 0 ? (
        <>
          <h3>These are your recently added items:</h3>
          <DisplayItems items={lastItemsAdded} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Profile;
