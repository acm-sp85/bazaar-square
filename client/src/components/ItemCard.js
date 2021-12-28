import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useHistory } from "react-router-dom";
import useHandleClickUsers from "./useHandleClickUser";
import useHandleClickInfo from "./useHandleClickInfo";
import useHandleClickLocation from "./useHandleClickLocation";
import useHandleClickCategory from "./useHandleClickCategory";
import useHandleClickType from "./useHandleClickType";

import "../styles/ItemCard.css";

function ItemCard({ cardInfo, toEdit, handleDelete, handleEdit }) {
  const history = useHistory();
  const handleUser = useHandleClickUsers(cardInfo.owner_id);
  const handleInfo = useHandleClickInfo(cardInfo.id);
  const handleLocation = useHandleClickLocation(cardInfo.city_id);
  const handleClickCategory = useHandleClickCategory(cardInfo.category_id);
  const handleClickType = useHandleClickType(
    cardInfo.item_type_id,
    cardInfo.type
  );

  const handleClickDelete = () => {
    handleDelete(cardInfo.id);
  };
  const handleClickEdit = () => {
    handleEdit(cardInfo.id);
  };

  return (
    <div className="item__card">
      <img src={cardInfo.image} className="image__card" onClick={handleInfo} />
      <h3 onClick={handleInfo}>{cardInfo.item_name}</h3>
      <p onClick={handleClickCategory} className="link">
        <strong> Category:</strong> {cardInfo.category_name}
      </p>
      <p onClick={handleLocation} className="link">
        <strong> Location:</strong> {cardInfo.location}
      </p>
      <p onClick={handleUser} className="link">
        <strong> User:</strong> {cardInfo.owner}
      </p>
      <br />
      <p onClick={handleClickType}>
        <strong>{cardInfo.type}</strong>
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
