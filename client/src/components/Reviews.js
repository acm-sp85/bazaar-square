import React from 'react';
import ReviewsPannel from './ReviewsPannel';

function Reviews({ currentUser }) {
  return (
    <div className="centered">
      {currentUser.reviews.length > 0 ? (
        <h3 style={{ textAlign: 'center' }}>
          {currentUser.user_name}, this is what they are saying about you
        </h3>
      ) : (
        <></>
      )}

      {currentUser.reviews.length > 0 ? (
        currentUser.reviews.map((review) => (
          <ReviewsPannel review={review} key={review.id} />
        ))
      ) : (
        <h3 style={{ textAlign: 'center' }}>You have no reviews yet.</h3>
      )}
    </div>
  );
}

export default Reviews;
