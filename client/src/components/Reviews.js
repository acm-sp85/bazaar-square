import React from "react";
import ReviewsPannel from "./ReviewsPannel";

function Reviews({ currentUser }) {
  return (
    <div>
      <h1>{currentUser.user_name}'s reviews</h1>
      {currentUser.reviews.map((review) => (
        <ReviewsPannel review={review} key={review.id} />
      ))}
    </div>
  );
}

export default Reviews;
