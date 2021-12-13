import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function ManageItems({ currentUser }) {
  const [usersItems, setUsersItems] = useState(currentUser.items);

  const handleEdit = (e) => {
    //  console.log("edit item " + cardInfo.id);
    console.log("edit item ");
  };
  const handleDelete = (e) => {
    console.log("delete item ");
    console.log(e);


    const filteredCards = usersItems.filter((item) => item.id != e);
    setUsersItems(filteredCards)


     const requestOptions = {
       method: "DELETE",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({}),
     };

     fetch(`/items/${e}`, requestOptions).then(
       console.log("Item deleted")
     );
  };
  return (
    <div>
      <h1>MANAGE ITEMS</h1>
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
