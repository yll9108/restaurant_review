import ReviewDetail from "@/components/common/ReviewDetail";
import User from "@/components/common/User";
import React, { useState } from "react";
import "./custom.css";
import { Button } from "@/components/common/button";
import { dummyReviewList } from "./dummyReviewList";

function PersonalReview() {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const displayAllReviews = showAllReviews
    ? dummyReviewList
    : dummyReviewList.slice(0, 5);
  const toggleReviews = () => {
    setShowAllReviews(!showAllReviews);
  };

  return (
    <>
      <div className="flex flex-col">
        {displayAllReviews.map((review) => (
          <div key={review.id} className="card bg-base-100 shadow-xl m-5">
            <div className="card-body flexRow">
              <User />
              <ReviewDetail
                id={review.id}
                icon={review.icon}
                rating={review.rating}
                date={review.date}
                title={review.title}
                content={review.content}
              />
            </div>
          </div>
        ))}
        {/* <div className="card bg-base-100 shadow-xl m-5">
          <div className="card-body flexRow">
            <User />
            {dummyReviewList.map((review) => (
              <ReviewDetail
                key={review.id}
                icon={review.icon}
                rating={review.rating}
                date={review.date}
                title={review.title}
                content={review.content}
              />
            ))}
          </div>
        </div> */}
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
