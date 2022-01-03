import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import ItemCard from "./ItemCard";
import AddItem from "./AddItem";
import RightComponent from "./RightComponent";

function ManageItems({ currentUser, setCurrentUser }) {
  const [usersItems, setUsersItems] = useState(currentUser.items);
  const [addItemActive, setAddItemActive] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(false);

  const history = useHistory();

  const handleEdit = (item_id) => {
    history.push({
      pathname: "/edit",
      state: item_id,
    });
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
      {/* <RightComponent
        setCurrentUser={setCurrentUser}
        currentUser={currentUser}
      /> */}
      <Button onClick={handleAddItemButton}>ADD ITEM</Button>
      {addItemActive ? (
        <AddItem currentUser={currentUser} setUsersItems={setUsersItems} />
      ) : (
        <></>
      )}
      <div className="items__grid">
        {usersItems.length > 0 ? (
          usersItems.map((item) => (
            <ItemCard
              cardInfo={item}
              toEdit={true}
              key={item.id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default ManageItems;
