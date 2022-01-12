import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import useHandleClickInfo from "./useHandleClickInfo";

function Wish(props) {
  const handleInfo = useHandleClickInfo(props.info.item_info.id);
  const handleDelete = (e) => {
    console.log(props.info.id);
    console.log(props.setWished_items);

    const filteredItems = props.wished_items.filter(
      (item) => item.id != props.info.id
    );
    props.setWished_items(filteredItems);
    const config = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };
    fetch(`/wishlists/${props.info.id}`, config).then(
      console.log("Item deleted, id: " + props.info.id)
    );
  };
  return (
    <div key={props.info.item_info.id}>
      {props.info.item_info.image_file ? (
        <img
          src={props.info.item_info.image_file}
          className="wishlist__card link"
          onClick={handleInfo}
        />
      ) : (
        <img
          src={props.info.item_info.image}
          className="wishlist__card link"
          onClick={handleInfo}
        />
      )}
      {/* <img
        className="wishlist__card link"
        src={props.info.item_info.image}
        onClick={handleInfo}
      /> */}
      <div>
        <p>{props.info.item_info.item_name}</p>
        <DeleteIcon
          color="error"
          fontSize="small"
          onClick={handleDelete}
          key={props.info.item_info.id}
          className="link"
        />
      </div>
    </div>
  );
}

export default Wish;
