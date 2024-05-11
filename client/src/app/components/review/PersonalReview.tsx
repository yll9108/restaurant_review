import ReviewDetail from "@/components/common/ReviewDetail";
import User from "@/components/common/User";
import React, { useState } from "react";
import "./custom.css";
import { Button } from "@/components/common/button";
import { Review } from "@/components/common/types";

// this props that the componment is receving has props called reviews that
// is an array of type review
type Props = {
  reviews: Review[];
};
function PersonalReview({ reviews }: Props) {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const displayAllReviews = Array.isArray(reviews)
    ? showAllReviews
      ? reviews
      : reviews.slice(0, 5)
    : [];
  const toggleReviews = () => {
    setShowAllReviews(!showAllReviews);
  };
  // console.log("displayAllReviews", displayAllReviews);
  // console.log("reviews", reviews);

  return (
    <>
      <div className="flex flex-col">
        {displayAllReviews.map((review) => (
          <div key={review._id} className="card bg-base-100 shadow-xl m-5">
            <div className="card-body flexRow">
              <User />
              <ReviewDetail
                _id={review._id}
                review_icon={review.review_icon}
                review_ratings={review.review_ratings}
                review_date={review.review_date}
                review_title={review.review_title}
                review_description={review.review_description}
                // id={review._id}
                // icon={review.review_icon}
                // rating={review.review_ratings}
                // date={review.review_date}
                // title={review.review_title}
                // content={review.review_description}
              />
            </div>
          </div>
        ))}
        {!showAllReviews && (
          <div className="text-center">
            <Button type={1} onClick={toggleReviews}>
              See more reviews
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default PersonalReview;
