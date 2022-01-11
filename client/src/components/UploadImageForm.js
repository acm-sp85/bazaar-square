import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function UploadImageForm(props) {
  const [image_file, setImage_file] = useState(null);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("image_file", image_file);
    fetch(`/items/${props.props.location.state}`, {
      method: "PATCH",
      body: formData,
    }).then((response) => {
      if (response.ok) {
        response.json().then((edited_item) => {
          console.log(edited_item);
          history.push("/manage-items");
        });
      } else {
        response.json().then((error) => {
          console.log(error.error);
        });
      }
    });
  };
  return (
    <div className="centered">
      <h1>upload image</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="custom-imputs"
          required
          type="file"
          accept="image/*"
          multiple={false}
          onChange={(e) => setImage_file(e.target.files[0])}
        />
        <br />
        <button>upload image</button>
      </form>
    </div>
  );
}

export default UploadImageForm;
