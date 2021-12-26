import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../styles/AddReview.css";

function AddReview({ currentUser, props }) {
  const [review_title, setReview_title] = useState("");
  const [review_rating, setReview_rating] = useState("");
  const [review_content, setReview_content] = useState("");
  const [user_id, setUser_id] = useState(props.history.location.state);
  const [author_id, setAuthor_id] = useState(currentUser.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        review_title,
        review_content,
        review_rating,
        user_id,
        author_id,
      }),
    };
    fetch(`/reviews/`, config).then((response) => {
      if (response.ok) {
        console.log(response);
      } else {
        response.json().then((error) => {
          console.log(error.error);
        });
      }
    });
  };

  return (
    <div className="centered">
      <h1>Add Review</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          className="custom-imputs"
          type="text"
          placeholder="Review Title..."
          value={review_title}
          onChange={(e) => setReview_title(e.target.value)}
        />
        <br />
        <select
          value={review_rating}
          onChange={(e) => setReview_rating(e.target.value)}
        >
          <option value="nill">Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <TextField
          id="outlined-multiline-flexible"
          maxRows={4}
          className="custom-imputs"
          type="text"
          placeholder="Review..."
          value={review_content}
          onChange={(e) => setReview_content(e.target.value)}
        />
        <br />

        <Button type="submit">ADD REVIEW</Button>
      </form>
    </div>
  );
}

export default AddReview;
