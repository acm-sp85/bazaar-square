import React from "react";
import ItemCard from "./ItemCard";
import DeleteIcon from "@mui/icons-material/Delete";

function Wish(info) {
  const handleDelete = (e) => {
    console.log(info.info.id);
    // const filteredCards = usersItems.filter((item) => item.id != e);
    // setUsersItems(filteredCards);
    const config = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };
    fetch(`/wishlists/${info.info.id}`, config).then(
      console.log("Item deleted, id: " + info.info.id)
    );
  };
  return (
    <div key={info.info.item_info.id}>
      <img className="wishlist__card" src={info.info.item_info.image} />
      <div>
        <p>{info.info.item_info.item_name}</p>
        <DeleteIcon
          color="error"
          fontSize="small"
          onClick={handleDelete}
          key={info.info.item_info.id}
        />
      </div>
    </div>
  );
}

export default Wish;
