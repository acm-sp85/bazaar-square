// import React, { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import ReviewsPannel from "./ReviewsPannel";
import { useHistory } from "react-router-dom";
import "../styles/UserProfile.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function UserProfilePublic(owner_id) {
  const [profile, setProfile] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useHistory();

  useEffect(() => {
    const config = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    console.log(owner_id);

    fetch(`/users/${owner_id.props.history.location.state}`, config)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // DO BETTER ERROR HANDLING
          console.log("ERROORRRR");
        }
      })
      .then((result) => {
        setProfile(result);
      });
  }, []);

  const goToAddReview = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/add-review",
      state: owner_id.props.history.location.state,
    });
  };

  return (
    <div>
      {profile ? (
        <div>
          <div className="user__profile">
            <h1>{profile.user_name}</h1>
            <h3>Email: {profile.email}</h3>
            <h3>Location: {profile.location}</h3>
            <h3 onClick={handleOpen} className="soft__link">
              Reviews({profile.rating_average}/5⭐)
            </h3>
            {/* <p>Out of {profile.reviews.length} ratings</p> */}
            {profile.id != owner_id.currentUser.id ? (
              <p
                onClick={() => {
                  history.push({
                    pathname: "/messager",
                    state: profile.id,
                  });
                }}
                style={{ cursor: "pointer" }}
              >
                Contact
              </p>
            ) : (
              <></>
            )}
          </div>
          <div className="items__grid">
            {profile.items.map((item) => (
              <ItemCard cardInfo={item} key={item.id} />
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <Box sx={style}>
          {profile ? (
            <div>
              <h3>
                Reviews:{" "}
                {profile.reviews.map((review) => (
                  <ReviewsPannel review={review} key={review.id} />
                ))}
              </h3>
              <Button onClick={goToAddReview}>Add Review</Button>
            </div>
          ) : (
            <></>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default UserProfilePublic;
