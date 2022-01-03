import React from "react";
import ReviewsPannel from "./ReviewsPannel";

function Reviews({ currentUser }) {
  return (
    <div className="centered">
      <h1>{currentUser.user_name}, this is what they are saying about you:</h1>
      {currentUser.reviews.length > 0 ? (
        currentUser.reviews.map((review) => (
          <ReviewsPannel review={review} key={review.id} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default Reviews;
