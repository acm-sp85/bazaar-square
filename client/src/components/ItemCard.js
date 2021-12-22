import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import useHandleClickUsers from "./useHandleClickUser";

import "../styles/ItemCard.css";

function ItemCard({ cardInfo, toEdit, handleDelete, handleEdit }) {
  const history = useHistory();
  const handleUser = useHandleClickUsers(cardInfo);

  const handleClickDelete = () => {
    handleDelete(cardInfo.id);
  };
  const handleClickEdit = () => {
    handleEdit(cardInfo.id);
  };
  const handleClickCategory = () => {
    history.push({
      pathname: "/category",
      state: cardInfo.category_id,
    });
  };
  const handleClickLocation = () => {
    history.push({
      pathname: "/location",
      state: cardInfo.city_id,
    });
    console.log("Launch search by location");
  };

  const handleClickInfo = () => {
    history.push({
      pathname: "/item-info",
      state: cardInfo.id,
    });
  };

  return (
    <div className="item__card">
      <img
        src={cardInfo.image}
        className="image__card"
        onClick={handleClickInfo}
      />
      <h3 onClick={handleClickInfo}>{cardInfo.item_name}</h3>
      <p onClick={handleClickCategory} className="link">
        <strong> Category:</strong> {cardInfo.category_name}
      </p>
      <p onClick={handleClickLocation} className="link">
        <strong> Location:</strong> {cardInfo.location}
      </p>
      <p onClick={handleUser} className="link">
        <strong> User:</strong> {cardInfo.owner}
      </p>

      {toEdit ? (
        <div className="link">
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
