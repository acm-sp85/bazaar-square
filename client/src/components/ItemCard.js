import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import "../styles/ItemCard.css";

function ItemCard({ cardInfo, toEdit, handleDelete, handleEdit }) {
  const handleClickDelete = () => {
    handleDelete(cardInfo.id);
  };
  const handleClickEdit = () => {
    handleEdit(cardInfo.id);
  };

  return (
    <div className="item__card">
      <img src={cardInfo.image} className="image__card" />
      <h3>{cardInfo.item_name}</h3>
      <p>
        <strong> Category:</strong> {cardInfo.category_name}
      </p>
      <p>
        <strong> Location:</strong> {cardInfo.location}
      </p>
      <p>
        <strong> User:</strong> {cardInfo.owner}
      </p>
      {toEdit ? (
        <div>
          <EditIcon
            style={{ fill: "green" }}
            fontSize="small"
            onClick={handleClickEdit}
          />
          <DeleteIcon
            color="error"
            fontSize="small"
            onClick={handleClickDelete}
            key={cardInfo.id}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ItemCard;
