"use client";
import ReviewDetail from "@/components/common/ReviewDetail";
import User from "@/components/common/User";
import React, { useState, useContext } from "react";
import "./custom.css";
import { BtnType, Button } from "@/components/common/button";
import { ReviewsContext } from "@/context/ReviewsContext";

// this props that the componment is receving has props called reviews that
// is an array of type review

const PersonalReview = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  // const [reviewedUid, setReviewedUid] = useState<string>("");
  const { allReviews } = useContext(ReviewsContext);
  const displayAllReviews = Array.isArray(allReviews)
    ? showAllReviews
      ? allReviews
      : allReviews.slice(0, 5)
    : [];
  const toggleReviews = () => {
    setShowAllReviews(!showAllReviews);
  };

  return (
    <>
      <div className="flex flex-col">
        {displayAllReviews.map((review) => (
          <div key={review._id} className="card bg-base-100 shadow-xl m-5">
            <div className="card-body flexRow">
              <User uid={review.userId} />

              <ReviewDetail
                _id={review._id}
                review_icon={review.review_icon}
                review_ratings={review.review_ratings}
                review_date={review.review_date}
                review_title={review.review_title}
                review_description={review.review_description}
                restaurantId={review.restaurantId}
                userId={review.userId}
              />
            </div>
          </div>
        ))}
        {allReviews.length > 5 && !showAllReviews && (
          <div className="text-center">
            <Button type={BtnType.regular_google} onClick={toggleReviews}>
              See more reviews
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default React.memo(PersonalReview);
