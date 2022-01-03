import React from "react";
import "../styles/UserProfile.css";

function ReviewsPannel(review) {
  return (
    <div key={review.review.id} className="review__card">
      <hr></hr>
      <p className="review__title">
        {review.review.review_title}({review.review.review_rating}/5)
      </p>
      <p className="review__by">By {review.review.reviewer}</p>
      <br />
      <p className="review__content">"{review.review.review_content}"</p>
    </div>
  );
}

export default ReviewsPannel;
