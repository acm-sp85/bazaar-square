import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ItemCard from "./ItemCard";
import AddItem from "./AddItem";

function ManageItems({ currentUser }) {
  const [usersItems, setUsersItems] = useState(currentUser.items);
  const [addItemActive, setAddItemActive] = useState(true);

  const handleEdit = (e) => {
    //  console.log("edit item " + cardInfo.id);
    console.log("edit item ");
  };
  const handleDelete = (e) => {
    const filteredCards = usersItems.filter((item) => item.id != e);
    setUsersItems(filteredCards);

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };

    fetch(`/items/${e}`, requestOptions).then(
      console.log("Item deleted, id: " + e)
    );
  };

  const handleAddItemButton = () => {
    setAddItemActive(!addItemActive);
  };

  return (
    <div>
      <h1>MANAGE ITEMS</h1>
      <Button onClick={handleAddItemButton}>ADD ITEM</Button>
      {addItemActive ? <AddItem currentUser={currentUser}/> : <></>}
      <div className="items__grid">
        {usersItems.map((item) => (
          <ItemCard
            cardInfo={item}
            toEdit={true}
            key={item.id}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default ManageItems;
