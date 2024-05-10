import ReviewDetail from "@/components/common/ReviewDetail";
import User from "@/components/common/User";
import React, { useEffect, useState } from "react";
import "./custom.css";
import { Button } from "@/components/common/button";
import { dummyReviewList } from "./dummyReviewList";

function PersonalReview() {
  // fetch review
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(
      "http://localhost:8080/api/restaurants/6636eb854f21f73d829772c5/review/"
    )
      .then((response) => response.json())
      .then((data) => {
        console.warn("data", data);
        setReviews(data);
      });
  }, []);

  const [showAllReviews, setShowAllReviews] = useState(false);
  const displayAllReviews = showAllReviews ? reviews : reviews.slice(0, 5);
  const toggleReviews = () => {
    setShowAllReviews(!showAllReviews);
  };
  console.log("displayAllReviews", displayAllReviews);

  return (
    <>
      <div className="flex flex-col">
        {displayAllReviews.map((review) => (
          <div key={review._id} className="card bg-base-100 shadow-xl m-5">
            <div className="card-body flexRow">
              <User />
              <ReviewDetail
                id={review._id}
                // icon={review.icon}
                rating={review.review_ratings}
                // date={review.date}
                title={review.review_title}
                content={review.review_description}
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
