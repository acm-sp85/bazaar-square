import React from "react";
import "../styles/UserProfile.css";

function ReviewsPannel(review) {
  return (
    <div key={review.review.id} className="review__card">
      <p>
        {review.review.review_title}({review.review.review_rating}/5)
      </p>
      <p>{review.review.review_content}</p>
      <p>Reviewed by: {review.review.reviewer}</p>
    </div>
  );
}

export default ReviewsPannel;
