import React, { useState } from "react";
import Button from "@mui/material/Button";

function AddItem({ currentUser }) {
  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [user_id, setUser_id] = useState(currentUser.id);
  const [city_id, setCity_id] = useState("");
  const [item_type_id, setItem_type_id] = useState("");
  const [image, setImage] = useState("");
  const [item_name, setItem_name] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Create item");
    const requestOptionsCard = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description,
        category_id,
        user_id,
        city_id,
        item_type_id,
        image,
        item_name,
      }),
    };

    fetch("/items", requestOptionsCard).then((response) => {
      if (response.ok) {
        console.log(response)
      } else {
        response.json().then((error) => {
          console.log(error.error);
        });
      }
    });
  };
  const handleCategory = (e) => {
    setCategory_id(e.target.value);
  };
  const handleBorough = (e) => {
    setCity_id(e.target.value);
  };
  const handleItemType = (e) => {
    setItem_type_id(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="custom-imputs"
          type="text"
          placeholder="Item name..."
          value={item_name}
          onChange={(e) => setItem_name(e.target.value)}
        />
        <br />
        <select value={category_id} onChange={handleCategory}>
          <option value="nill">Category</option>
          <option value="1">Art</option>
          <option value="2">Books</option>
          <option value="3">Electronics</option>
          <option value="4">Furniture</option>
          <option value="5">Games</option>
          <option value="6">Vehicles</option>
        </select>
        <br />

        <select value={city_id} onChange={handleBorough}>
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
          type="text"
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          className="custom-imputs"
          type="text"
          placeholder="Image..."
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <select value={item_type_id} onChange={handleItemType}>
          {/* <option value="nill">Borough</option> */}
          <option value="1">Share</option>
          <option value="2">Donate</option>
          <option value="3">Sell</option>
        </select>

        <br />
        <Button type="submit">CREATE ITEM</Button>
      </form>
    </div>
  );
}

export default AddItem;
