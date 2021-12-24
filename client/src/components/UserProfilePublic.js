import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import ReviewsPannel from "./ReviewsPannel";
import "../styles/UserProfile.css";

function UserProfilePublic(owner_id) {
  const [profile, setProfile] = useState(null);
  const [visibleReviews, setVisibleReviews] = useState(false);

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

  const showReviews = () => {
    setVisibleReviews(!visibleReviews);
    console.log("hey");
  };

  return (
    <div>
      {profile ? (
        <div>
          <div className="user__profile">
            <h1>{profile.user_name}</h1>
            <h3>Email: {profile.email}</h3>
            <h3>Location: {profile.location}</h3>
            <h3 onClick={showReviews}>Reviews({profile.reviews.length})</h3>
            {visibleReviews ? (
              <h3>
                Reviews:{" "}
                {profile.reviews.map((review) => (
                  <ReviewsPannel review={review} />
                ))}
              </h3>
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
    </div>
  );
}

export default UserProfilePublic;
