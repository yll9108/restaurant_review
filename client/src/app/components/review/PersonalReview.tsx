import ReviewDetail from "@/components/common/ReviewDetail";
import User from "@/components/common/User";
import React, { useContext, useEffect, useState } from "react";
import "./custom.css";
import { Button } from "@/components/common/button";
import { dummyReviewList } from "./dummyReviewList";
import { RestaurantContext } from "@/context/RestaurantContext";
import { DummyReviewList, Review } from "@/components/common/types";

// this props that the componment is receving has props called reviews that
// is an array of type review
type Props = {
  reviews: Review[];
};
function PersonalReview({ reviews }: Props) {
  // ** have questio here  ** //

  // function PersonalReview({ reviews }: DummyReviewList[]) {
  // fetch review
  // const [reviews, setReviews] = useState([]);
  // const { clickedRestaurant } = useContext(RestaurantContext);
  // const clickedRestaurantId = clickedRestaurant ? clickedRestaurant._id : null;
  // console.log("lll", clickedRestaurant);

  // useEffect(() => {
  //   if (clickedRestaurantId) {
  //     fetch(
  //       `http://localhost:8080/api/restaurants/${clickedRestaurantId}/review/`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // console.warn("data", data);
  //         // console.warn("restaurantId", restaurantId);
  //         setReviews(data);
  //       });
  //   }
  // }, [clickedRestaurantId]);

  const [showAllReviews, setShowAllReviews] = useState(false);
  const displayAllReviews = Array.isArray(reviews)
    ? showAllReviews
      ? reviews
      : reviews.slice(0, 5)
    : [];
  const toggleReviews = () => {
    setShowAllReviews(!showAllReviews);
  };
  console.log("displayAllReviews", displayAllReviews);
  console.log("reviews", reviews);

  return (
    <>
      <div className="flex flex-col">
        {displayAllReviews.map((review) => (
          <div key={review._id} className="card bg-base-100 shadow-xl m-5">
            <div className="card-body flexRow">
              <User />
              <ReviewDetail
                id={review._id}
                icon={review.icon}
                rating={review.review_ratings}
                date={review.date}
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
