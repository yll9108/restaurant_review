"use client";
import ReviewDetail from "@/components/common/ReviewDetail";
import User from "@/components/common/User";
import React, { useState, useContext, useEffect, useCallback } from "react";
import "./custom.css";
import { BtnType, Button } from "@/components/common/button";
import { ReviewsContext } from "@/context/ReviewsContext";
import { useParams } from "next/navigation";

const PersonalReview = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const { allReviews, fetchReviews } = useContext(ReviewsContext);
  const params = useParams();
  const restaurantId = params.restaurantId as string;

  const fetchReviewsCallback = useCallback(() => {
    fetchReviews(restaurantId);
  }, [restaurantId, fetchReviews]);

  useEffect(() => {
    fetchReviewsCallback();
  }, [fetchReviewsCallback]);
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
      {displayAllReviews.map((review) => (
        <div key={review._id} className="card bg-base-100 shadow-xl m-5 w-5/6 ">
          <div className="card-body flexRow">
            <User uid={review.userId} />
            <ReviewDetail
              _id={review._id}
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
    </>
  );
};

export default React.memo(PersonalReview);
